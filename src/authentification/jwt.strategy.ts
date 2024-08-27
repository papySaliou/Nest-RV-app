import { AuthentificationController } from './authentification.controller';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from "@nestjs/common";
import { AuthentificationService } from './authentification.service';


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private authentificationService: AuthentificationService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'secretKey',
    });
  }

  async validate(payload: any) {
    return { userId: payload.sub, username: payload.username };
  }
}