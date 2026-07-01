import { Body, Controller, Param, Post } from "@nestjs/common";
import { ProcessPaymentDto } from "src/dto/process-payment.dto";
import { PaymentService } from "src/services/payment.service";

@Controller('payments')
export class PaymentController {
    constructor(private readonly paymentService: PaymentService) { }

    @Post()
    processPayment(@Body() dto: ProcessPaymentDto) {
        return this.paymentService.processPayment(dto);
    }

    @Post(':orderId/capture')
    capturePayment(@Param('orderId') orderId: string) {
        return this.paymentService.capturePayment(orderId);
    }

    @Post(':orderId/void')
    voidHold(@Param('orderId') orderId: string) {
        return this.paymentService.voidHold(orderId);
    }
}