import { Injectable, Logger } from '@nestjs/common';
import { IPaymentStrategy } from '../interfaces/payment-strategy.interface';
import { PaymentResult, CaptureResult, RefundResult } from '../interfaces/payment-result.interface';

const checkoutNodeJssdk = require('@paypal/checkout-server-sdk');

@Injectable()
export class PayPalStrategy implements IPaymentStrategy {
  private readonly logger = new Logger(PayPalStrategy.name);
  private paypalClient: any;

  constructor() {
    const clientId = process.env.PAYPAL_CLIENT_ID || 'test';
    const clientSecret = process.env.PAYPAL_CLIENT_SECRET || 'test';
    const environment = process.env.NODE_ENV === 'production' 
      ? new checkoutNodeJssdk.core.LiveEnvironment(clientId, clientSecret)
      : new checkoutNodeJssdk.core.SandboxEnvironment(clientId, clientSecret);
    this.paypalClient = new checkoutNodeJssdk.core.PayPalHttpClient(environment);
  }

  async processPayment(
    amount: number,
    metadata: { orderId: string; customerId: string; restaurantId: string; email: string; savedMethodData?: any },
    idempotencyKey: string,
  ): Promise<PaymentResult> {
    this.logger.log(`Processing payment of ${amount} for order ${metadata.orderId}`);
    
    const request = new checkoutNodeJssdk.orders.OrdersCreateRequest();
    request.prefer('return=representation');
    request.requestBody({
      intent: 'CAPTURE',
      purchase_units: [
        {
          reference_id: metadata.orderId,
          custom_id: metadata.orderId,
          description: `Order ${metadata.orderId}`,
          amount: {
            currency_code: 'USD',
            value: amount.toFixed(2),
          },
        },
      ],
      application_context: {
        brand_name: 'Payment Module',
        landing_page: 'NO_PREFERENCE',
        user_action: 'PAY_NOW',
        return_url: `${process.env.APP_BASE_URL || 'http://localhost:3010'}/payment/success?orderId=${metadata.orderId}`,
        cancel_url: `${process.env.APP_BASE_URL || 'http://localhost:3010'}/payment/cancel?orderId=${metadata.orderId}`,
      },
    });

    try {
      const response = await this.paypalClient.execute(request);
      const paypalOrderId = response.result.id;
      const approvalUrl = response.result.links.find((link: any) => link.rel === 'approve')?.href;

      if (!approvalUrl) {
        throw new Error('No approval URL from PayPal');
      }

      return {
        success: true,
        transactionId: paypalOrderId,
        clientSecret: approvalUrl, 
        requiresAction: true,
      };
    } catch (error: any) {
      this.logger.error('PayPal create order failed:', error.message);
      return {
        success: false,
        message: error.message || 'PayPal create order failed',
      };
    }
  }

  async capturePayment(transactionId: string, amount?: number): Promise<CaptureResult> {
    this.logger.log(`Capture request for ${transactionId}`);
    
    const request = new checkoutNodeJssdk.orders.OrdersCaptureRequest(transactionId);
    request.requestBody({});

    try {
      const response = await this.paypalClient.execute(request);
      const status = response.result.status;

      if (status === 'COMPLETED') {
        return { success: true };
      } else {
        return {
          success: false,
          message: `PayPal returned status: ${status}`,
        };
      }
    } catch (error: any) {
      this.logger.error('PayPal capture failed:', error.message);
      return {
        success: false,
        message: error.message || 'PayPal capture failed',
      };
    }
  }

  async refund(transactionId: string, amount: number): Promise<RefundResult> {
    this.logger.log(`Refunding transaction ${transactionId} - Stubbed`);
    return {
      success: false,
      refundId: '',
      message: 'PayPal refund not implemented in strategy.',
    };
  }
}
