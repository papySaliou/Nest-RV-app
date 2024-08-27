import { RendezVous } from 'src/rendezvous/rendezvous.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
// import { RendezVous } from '../rendezvous/rendezvous.entity';

@Entity()
export class Docteur {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nom: string;

  @Column()
  prenom: string;
  
  @Column()
  fonction: string;

  // @Column()
  // adresse: string;

  @Column()
  telephone: string;
  
  @Column()
  mail: string;
  
  @Column()
  motdepasse: string;

  @OneToMany(() => RendezVous, (rendezvous) => rendezvous.docteur)
  rendezvous: RendezVous[];
}
