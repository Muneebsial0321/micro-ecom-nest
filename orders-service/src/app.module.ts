import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { OrderModule } from './order/order.module';
import { DbModule } from './db/db.module';


@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true
  }), OrderModule,DbModule],

})
export class AppModule { }
