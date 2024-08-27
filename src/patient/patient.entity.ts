import { RendezVous } from 'src/rendezvous/rendezvous.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
// import { RendezVous } from '../rendezvous/rendezvous.entity';

@Entity()
export class Patient {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nom: string;

  @Column()
  prenom: string;

  @Column()
  age: number;

  @Column()
  adresse: string;

  @Column()
  telephone: number;

  // @Column()
  // email: string;

  // @Column()
  // motdepasse: number;

  @OneToMany(() => RendezVous, (rendezvous) => rendezvous.patient)
  rendezvous: RendezVous[];
}
