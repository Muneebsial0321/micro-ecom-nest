import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MailsModule } from './mails/mails.module';

@Module({
  imports: [MailsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
