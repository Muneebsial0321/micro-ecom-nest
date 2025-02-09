import { Module } from '@nestjs/common';
import { MailsService } from './mails.service';
import { MailsController } from './mails.controller';
import { MailerModule } from '@nestjs-modules/mailer';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MailerModule.forRoot({
    transport: {
      host: 'smtp.gmail.com',
      secure: false,
      port: 587,
      auth: {
        user: process.env.ADMIN_EMAIL,
        pass: process.env.ADMIN_EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false 
      },
    },
  })],
  controllers: [MailsController],
  providers: [MailsService],
})
export class MailsModule { }
