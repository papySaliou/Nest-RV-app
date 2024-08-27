import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! Voici mon le backend de mon appli de gestion de RENDEZ-VOUS !!!';
  }
}
