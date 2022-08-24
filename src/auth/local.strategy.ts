import { UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-jwt';
import { AuthService, ILogin } from './auth.service';

export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(login: ILogin) {
    const user = await this.authService.validate(login);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
