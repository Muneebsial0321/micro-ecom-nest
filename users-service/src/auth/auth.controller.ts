import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }


  @UseGuards(AuthGuard('google'))
  @Get("google")
  googleAuth() {
    console.log("hitting it")
  }

  @UseGuards(AuthGuard('google'))
  @Get("google/callback")
  googleAuthCallback(@Req() req) { 
    // console.log({req})
    // to-do
  }
}
