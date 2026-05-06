import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  // Enable rawBody so that Stripe webhooks can access the raw Buffer.
  // NestJS STILL automatically applies standard JSON parsing to all routes,
  // but it attaches the raw Buffer to req.rawBody for any route that needs it.
  const app = await NestFactory.create(AppModule, { rawBody: true });

  const port = process.env.PORT || 3000;
  const baseUrl = process.env.APP_BASE_URL || `http://localhost:${port}`;

  await app.listen(port);
  console.log(`🚀 Server running on ${baseUrl}`);
  console.log(`📖 API docs: ${baseUrl}/api-docs`);
}
bootstrap();
