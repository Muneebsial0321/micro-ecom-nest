import { Module } from '@nestjs/common';
import { MicroService } from './email.service';

@Module({
  providers: [MicroService],
})
export class ServiceModule {}
