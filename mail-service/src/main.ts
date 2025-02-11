import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: [`${process.env.RABBITMQ_URL}`],
      queue: "mail-queue",
      exchange: "mail-exchange",
      routingKey: "mail.*",
      queueOptions: {
        durable: true,
        arguments: {
          'x-dead-letter-exchange': 'dlx', 
          'x-dead-letter-routing-key': 'mail.failed',
        },
      },

    }
  })
  await app.listen()
  console.log("Running All services")
}
bootstrap();
