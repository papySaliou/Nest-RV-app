import { Injectable } from '@nestjs/common';
import { Docteur } from './docteur.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class DocteurService {
    constructor(
        @InjectRepository(Docteur)
        private docteurRepository: Repository<Docteur>,
      ) {}
    
      findAll(): Promise<Docteur[]> {
        return this.docteurRepository.find();
      }
    
      findOne(id: number): Promise<Docteur> {
        return this.docteurRepository.findOne({ where: {id}});
      }
    
      create(docteur: Docteur): Promise<Docteur> {
    return this.docteurRepository.save(docteur)
  }

  async update(id: number, updateDocteurDto: Partial<Docteur>): Promise<Docteur> {
    await this.docteurRepository.update(id, updateDocteurDto)
    return this.docteurRepository.findOneBy({ id })
  }
      async remove(id: number): Promise<void> {
        await this.docteurRepository.delete(id);
      }
}
