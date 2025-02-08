import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { GoogleStrategy } from './strategies/google.strategy';
import { JwtModule } from '@nestjs/jwt';
import { ServiceModule } from 'src/service/service.module';

@Module({
  imports: [ServiceModule,
    JwtModule.register({
      secret: `${process.env.JWT_SECRECT}`,
      signOptions: { expiresIn: '1d' }
    })
  ],
  controllers: [AuthController],
  providers: [AuthService, GoogleStrategy],
  exports: [JwtModule]
})
export class AuthModule { }
