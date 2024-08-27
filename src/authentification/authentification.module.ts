import { Module } from '@nestjs/common';
import { AuthentificationController } from './authentification.controller';
import { AuthentificationService } from './authentification.service';
import { JwtStrategy } from './jwt.strategy';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { ProfileController } from './profile.controller';

@Module({

  imports: [
    TypeOrmModule.forFeature([User]),
    PassportModule,
    JwtModule.register({
      secret: 'secretKey',
      signOptions: { expiresIn: '60m' },
    }),
  ],
  controllers: [AuthentificationController,ProfileController],
  providers: [AuthentificationService,JwtStrategy]
})
export class AuthentificationModule {}
