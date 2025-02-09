import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { MailsService } from './mails.service';

@Controller()
export class MailsController {
  constructor(private readonly mailsService: MailsService) {}

  @MessagePattern('mail.user.register')
  create(@Payload() createMailDto:any) {
    return this.mailsService.create(createMailDto);
  }

}
