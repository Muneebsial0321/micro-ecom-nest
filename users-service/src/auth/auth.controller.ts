import { Controller, Get, Param, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { EmailService } from 'src/service/email.service';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly mail: EmailService,

  ) { }


  @Get('register')
  register() {
    this.mail.RegisterMail("")
    return { res: "success" }
  }

  @Post('login')
  login() { }

  @Post('forget-password')
  forgetPassword() { }

  @Post('reset-password')
  resetPassword() { }





  @UseGuards(AuthGuard('google'))
  @Get("google")
  googleAuth() {
    console.log("hitting it")
  }

  @UseGuards(AuthGuard('google'))
  @Get("google/callback")
  googleAuthCallback(@Req() _req) {
    // console.log({req})
    // to-do
  }


  @Get('')
  jwtScheck() {
    console.log(process.env.JWT_SECRECT)
    const t = this.authService.googleAuth()
    console.log({ t })
    return { t }
    // this.authService.googleAuth()
  }

  @Get('d/:t')
  jwtCheck(@Param('t') token: string) {

    return this.authService.jwtDecode(token)
    // this.authService.googleAuth()
  }
}
