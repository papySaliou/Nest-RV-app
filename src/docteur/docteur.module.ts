import { Module } from '@nestjs/common';
import { DocteurController } from './docteur.controller';
import { DocteurService } from './docteur.service';
import { Docteur } from './docteur.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Docteur])],
  controllers: [DocteurController],
  providers: [DocteurService]

})
export class DocteurModule {}
