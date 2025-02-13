import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { OrderModule } from './order/order.module';


@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true
  }), OrderModule],

})
export class AppModule { }
