import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { DbModule } from './db/db.module';
import { UsersModule } from './users/users.module';
import { ServiceModule } from './service/service.module';

@Module({
  imports: [ConfigModule.forRoot({
    // envFilePath: './.env.dev',
    isGlobal: true
  }), AuthModule, DbModule, UsersModule, ServiceModule ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
