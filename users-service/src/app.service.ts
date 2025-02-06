import { Injectable } from '@nestjs/common';
import { ClientProxy, ClientProxyFactory, Transport } from '@nestjs/microservices';


@Injectable()
export class AppService {
  private readonly Patterns = {
    "test": "test"
  }

  private RabbitMq: ClientProxy
  constructor() {
    this.RabbitMq = ClientProxyFactory.create({
      transport: Transport.RMQ,
      options: {
        queue: 'mail_queue',
        urls: [`${process.env.RABBITMQ_URL}`],
        queueOptions: { durable: true }
      }
    })
  }
  Dev_Send_Message() {
    const data = { message: "hello world" }
    this.RabbitMq.emit(
      this.Patterns.test,
      data
    )
    return { message: "has been sent to pattern " + this.Patterns.test }
  }
}
