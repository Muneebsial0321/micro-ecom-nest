import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwt: JwtService
  ) { }

  login() { }
  register() { }
  forgetPassword() { }
  resetPassword() { }
  changePassword() { }
  googleAuth() {
    const token = this.jwt.sign({ name: "muneeb" })

    return token
  }

  jwtDecode(token:string){
    return this.jwt.verify(token)

  }
}
