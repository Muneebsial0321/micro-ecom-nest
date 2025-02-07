import { Controller, Get, Param, Req, UseGuards } from '@nestjs/common';
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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  googleAuthCallback(@Req() _req) { 
    // console.log({req})
    // to-do
  }


  @Get('')
  jwtScheck(){
    console.log(process.env.JWT_SECRECT)
    const t = this.authService.googleAuth()
    console.log({t})
    return {t}
    // this.authService.googleAuth()
  }

  @Get('d/:t')
  jwtCheck(@Param('t') token:string){

    return this.authService.jwtDecode(token)
    // this.authService.googleAuth()
  }
}
