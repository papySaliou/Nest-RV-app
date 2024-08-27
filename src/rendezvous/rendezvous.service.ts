import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RendezVous } from './rendezvous.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RendezvousService {

  constructor(
    @InjectRepository(RendezVous)
    private rendezvousRepository: Repository<RendezVous>
  ) {}

  findAll(): Promise<RendezVous[]> {
    return this.rendezvousRepository.find()
  }

  findOne(id: number): Promise<RendezVous> {
    return this.rendezvousRepository.findOneBy({ id })
  }

  create(patient: RendezVous): Promise<RendezVous> {
    return this.rendezvousRepository.save(patient)
  }

  async update(id: number, updateBookDto: Partial<RendezVous>): Promise<RendezVous> {
    await this.rendezvousRepository.update(id, updateBookDto)
    return this.rendezvousRepository.findOneBy({ id })
  }

  async remove(id: number): Promise<void> {
    await this.rendezvousRepository.delete(id)
  }

}
