import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('test')
  getHello() {
    return this.appService.Dev_Send_Message();
  }
  @Get()
  get() {
    return { "users": "Working" }
  }
}
