import { Controller, Get } from '@nestjs/common';
import { EventPattern, MessagePattern, Payload } from '@nestjs/microservices';
import { MailsService } from './mails.service';
import { MailerService } from '@nestjs-modules/mailer';

@Controller("mail")
export class MailsController {
  constructor(
    private readonly mailsService: MailsService,
    private readonly mail: MailerService,

  ) { }


  @EventPattern('mail.send')
  async creat(@Payload() payload: any) {
    console.log("Event patterns")
    console.log("sending maill")
    // await this.mail.sendMail({
    //   to: "muneeburrehmansial0321@gmail.com",
    //   subject: "mail from micro service",
    //   text: "hello form mail service"

    // })
    console.log("Received payload form the queue", payload)
  }

  @Get()
  async sendm() {
    console.log("sending maill")
    await this.mail.sendMail({
      to: "muneeburrehmansial0321@gmail.com",
      subject: "mail from micro service",
      text: "hello form mail service"

    })
    return ""
  }

}
