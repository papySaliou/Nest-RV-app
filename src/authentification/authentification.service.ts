import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthentificationService {
        constructor(
          @InjectRepository(User)
          private usersRepository: Repository<User>,
          private jwtService: JwtService,
        ) {}
      
        async signUp(nom: string, prenom: string, mail: string, motdepass: string): Promise<void> {
          // Validation des données d'entrée
          if (!nom || !prenom || !mail || !motdepass) {
            throw new BadRequestException('Tous les champs sont requis');
          }
      
          // Vérifier si l'utilisateur existe déjà
          const existingUser = await this.usersRepository.findOne({ where: { mail } });
          if (existingUser) {
            throw new BadRequestException('Un utilisateur avec cet e-mail existe déjà');
          }
      
          const hashedmotdepass = await bcrypt.hash(motdepass, 10);
          const user = this.usersRepository.create({ nom, prenom, mail, motdepass: hashedmotdepass });
          await this.usersRepository.save(user);
        }
      
        async signIn(mail: string, motdepass: string): Promise<{ accessToken: string }> {
          // Validation des données d'entrée
          if (!mail || !motdepass) {
            throw new BadRequestException('mail et mot de passe sont requis');
          }
      
          const user = await this.usersRepository.findOne({ where: { mail } });
          if (user && await bcrypt.compare(motdepass, user.motdepass)) {
            const payload = { mail: user.mail, sub: user.id };
            const accessToken = this.jwtService.sign(payload);
            return { accessToken };
          } else {
            throw new UnauthorizedException('Identifiants invalides');
          }
        }
      }

