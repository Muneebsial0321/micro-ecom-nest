import { Injectable, Logger } from '@nestjs/common';
import { ClientOptions, ClientProxy, ClientProxyFactory, Transport } from '@nestjs/microservices';

@Injectable()
export class EmailService {
    private logger = new Logger("Mail MicroService")
    // constructor(private readonly logger: Logger) { }
    private readonly EmailService: ClientProxy = ClientProxyFactory.create(Options('mail-queue'))

    RegisterMail(to: string) {
        this.logger.log("Sending Register Email")
        this.EmailService.emit("register", { to })
    }

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