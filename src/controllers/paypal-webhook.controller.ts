import { Controller, Post, Req, Res, Logger } from '@nestjs/common';
import type { Request, Response } from 'express';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { PaymentAttemptService } from '../services/payment-attempt.service';
import { PaymentAttemptStatus } from '../generated/prisma';
import { PAYMENT_EVENTS } from '../constants/payment.constants';
import { PaymentCapturedPayload, PaymentFailedPayload } from '../interfaces/payment-event.interface';

@Controller('webhooks/paypal')
export class PayPalWebhookController {
  private readonly logger = new Logger(PayPalWebhookController.name);

  constructor(
    private readonly paymentAttemptService: PaymentAttemptService,
    private readonly eventEmitter: EventEmitter2,
  ) {}

  @Post()
  async handlePayPalWebhook(@Req() req: Request, @Res() res: Response) {
    const payload = req.body;
    
    if (!payload || !payload.event_type) {
      return res.status(400).send('Webhook Error: Missing payload or event_type');
    }

    const eventType = payload.event_type;
    this.logger.log(`Received PayPal event: ${eventType}`);

    try {
      switch (eventType) {
        case 'PAYMENT.CAPTURE.COMPLETED':
          await this.handlePaymentCaptureCompleted(payload);
          break;
        case 'PAYMENT.CAPTURE.DENIED':
          await this.handlePaymentCaptureDenied(payload);
          break;
        default:
          this.logger.log(`Unhandled PayPal event type: ${eventType}`);
      }
      res.json({ received: true });
    } catch (err: any) {
      this.logger.error(`PayPal Webhook Handler error for ${eventType}: ${err.message}`, err.stack);
      res.status(500).send(`Handler Error: ${err.message}`);
    }
  }

  private async handlePaymentCaptureCompleted(payload: any) {
    const purchaseUnit = payload.resource?.purchase_units?.[0];
    const orderId = purchaseUnit?.custom_id || purchaseUnit?.reference_id;

    if (!orderId) {
      this.logger.error('PAYMENT.CAPTURE.COMPLETED missing orderId in purchase_units custom_id/reference_id');
      return;
    }

    const idempotencyKey = `order_${orderId}`;
    const attempt = await this.paymentAttemptService.findAttempt(idempotencyKey);

    if (attempt?.status === PaymentAttemptStatus.SUCCESS) {
      return; // Already processed — idempotent
    }

    const amount = payload.resource?.amount?.value;
    const captureId = payload.resource?.id;

    await this.paymentAttemptService.updateStatus(
      idempotencyKey,
      PaymentAttemptStatus.SUCCESS,
      captureId,
      { amount: amount ? parseFloat(amount) : undefined },
    );

    this.eventEmitter.emit(PAYMENT_EVENTS.CAPTURED, {
      orderId,
      customerId: '',
      transactionId: captureId,
      amount: amount ? parseFloat(amount) : 0,
    } as PaymentCapturedPayload);
  }

  private async handlePaymentCaptureDenied(payload: any) {
    const purchaseUnit = payload.resource?.purchase_units?.[0];
    const orderId = purchaseUnit?.custom_id || purchaseUnit?.reference_id;

    if (!orderId) {
      this.logger.error('PAYMENT.CAPTURE.DENIED missing orderId in purchase_units');
      return;
    }

    const idempotencyKey = `order_${orderId}`;
    const attempt = await this.paymentAttemptService.findAttempt(idempotencyKey);

    if (attempt?.status === PaymentAttemptStatus.FAILED) {
      return; // Already processed
    }
    
    const captureId = payload.resource?.id;
    const errorMessage = payload.resource?.status_details?.reason || 'PayPal capture denied';

    await this.paymentAttemptService.updateStatus(
      idempotencyKey,
      PaymentAttemptStatus.FAILED,
      captureId,
      { error: { message: errorMessage } },
    );

    this.eventEmitter.emit(PAYMENT_EVENTS.FAILED, {
      orderId,
      customerId: '',
      transactionId: captureId,
      error: errorMessage,
    } as PaymentFailedPayload);
  }
}
