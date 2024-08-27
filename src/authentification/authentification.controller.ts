import { Body, Controller, Post } from '@nestjs/common';
import { AuthentificationService } from './authentification.service';

@Controller('authentification')
export class AuthentificationController {
  constructor(private readonly authentificationService: AuthentificationService) {}

  @Post('signup')
  async signUp(@Body() body: { nom: string; prenom:string; mail:string; motdepass: string }) {
    await this.authentificationService.signUp(body.nom, body.prenom, body.mail, body.motdepass);
  }

  @Post('signin')
  async signIn(@Body() body: { mail: string; motdepass: string }) {
    return this.authentificationService.signIn(body.mail, body.motdepass);
  }
}
