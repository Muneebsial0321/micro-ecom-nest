import { Injectable } from '@nestjs/common';
import { ClientOptions, ClientProxy, ClientProxyFactory, Transport } from '@nestjs/microservices';

@Injectable()
export class EmailServiceService {
    private readonly EmailService: ClientProxy = ClientProxyFactory.create(Options('mail-queue'))
    

}

const Options = (queueName: string): ClientOptions => {
    return {
        transport: Transport.RMQ,
        options: {
            queue: queueName,
            urls: [`${process.env.RABBITMQ_URL}`],
            queueOptions: { durable: true }
        }


    }
}