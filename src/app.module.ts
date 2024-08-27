import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PatientModule } from './patient/patient.module';
import { RendezvousModule } from './rendezvous/rendezvous.module';
import { DocteurModule } from './docteur/docteur.module';
import { Patient } from './patient/patient.entity';
import { RendezVous } from './rendezvous/rendezvous.entity';
import { Docteur } from './docteur/docteur.entity';
import { AuthentificationModule } from './authentification/authentification.module';
import { User } from './authentification/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'rv',
      entities: [Patient, RendezVous, Docteur, User],
      synchronize: true,
    }),
    PatientModule,
    RendezvousModule,
    DocteurModule,
    AuthentificationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
