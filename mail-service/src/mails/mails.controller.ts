import { Controller, Get } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { MailsService } from './mails.service';
import { MailerService } from '@nestjs-modules/mailer';

@Controller("mail")
export class MailsController {
  constructor(
    private readonly mailsService: MailsService,
    private readonly mail: MailerService,

  ) { }

  @MessagePattern('mail.user.register')
  create(@Payload() createMailDto: any) {
    return this.mailsService.create(createMailDto);
  }

  @Get()
  async sendm() {
    console.log("sending maill")
    console.log({
      user: process.env.ADMIN_EMAIL,
      pass: process.env.ADMIN_EMAIL_PASS
    })
    await this.mail.sendMail({
      to: "muneeburrehmansial0321@gmail.com",
      subject: "mail from micro service",
      text: "hello form mail service"

    })
    return ""
  }

}
