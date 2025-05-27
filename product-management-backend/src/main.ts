// main.ts (NestJS)
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: ['http://localhost:3000', 'https://vercel.com/ayushs-projects-ebfb06be/product-management-frontend/3dBGn31JM1BLmfBxp2rmmvvqmQ4M'],
    credentials: true,
  });

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
