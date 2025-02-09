import { Module } from '@nestjs/common';
import { MailsService } from './mails.service';
import { MailsController } from './mails.controller';
import { MailerModule } from '@nestjs-modules/mailer';

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: 'smtp.gmail.com',
        secure:false,
        port:587,
        auth: { user: "", pass: "" },
        tls: {
          rejectUnauthorized: false
        },
      },
    })
  ],
  controllers: [MailsController],
  providers: [MailsService],
})
export class MailsModule { }
