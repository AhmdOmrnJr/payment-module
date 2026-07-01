import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { ScheduleModule } from '@nestjs/schedule';

// Prisma
import { PrismaService } from './prisma/prisma.service';

// Config
import { stripeProvider } from './config/stripe.config';

// Controllers
import { StripeWebhookController } from './controllers/stripe-webhook.controller';
import { PayPalWebhookController } from './controllers/paypal-webhook.controller';

// Repositories
import { PaymentAttemptRepository } from './repositories/payment-attempt.repository';
import { PaymentMethodRepository } from './repositories/payment-method.repository';
import { PreferredPaymentSettingsRepository } from './repositories/preferred-payment-settings.repository';
import { RefundRepository } from './repositories/refund.repository';

// Strategies
import { PaymentStrategyFactory } from './strategies/payment-strategy.factory';
import { StripeStrategy } from './strategies/stripe.strategy';
import { PayPalStrategy } from './strategies/paypal.strategy';
import { AmadeusStrategy } from './strategies/amadeus.strategy';
import { CashOnDeliveryStrategy } from './strategies/cash-on-delivery.strategy';

// Services
import { PaymentAttemptService } from './services/payment-attempt.service';
import { PaymentMethodService } from './services/payment-method.service';
import { PaymentService } from './services/payment.service';
import { PreferredPaymentSettingsService } from './services/preferred-payment-settings.service';
import { RefundService } from './services/refund.service';

// Jobs
import { StalePaymentJob } from './jobs/stale-payment.job';

@Module({
  imports: [
    // ConfigModule without forRoot() so this module works whether it is
    // bootstrapped standalone OR imported into a host monolith that
    // already calls ConfigModule.forRoot() at the root level.
    ConfigModule,
    EventEmitterModule.forRoot(),
    ScheduleModule.forRoot(),
  ],
  controllers: [StripeWebhookController, PayPalWebhookController],
  providers: [
    PrismaService,
    stripeProvider,

    PaymentAttemptRepository,
    PaymentMethodRepository,
    PreferredPaymentSettingsRepository,
    RefundRepository,

    StripeStrategy,
    PayPalStrategy,
    AmadeusStrategy,
    CashOnDeliveryStrategy,
    PaymentStrategyFactory,

    PaymentAttemptService,
    PaymentMethodService,
    PaymentService,
    PreferredPaymentSettingsService,
    RefundService,

    StalePaymentJob,
  ],
  exports: [
    PaymentService,
    PaymentAttemptService,
    PaymentMethodService,
    PreferredPaymentSettingsService,
    RefundService,
  ],
})
export class PaymentModule {}
