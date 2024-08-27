import { Docteur } from 'src/docteur/docteur.entity';
import { Patient } from 'src/patient/patient.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from 'typeorm';
// import { RendezVous } from '../rendezvous/rendezvous.entity';

@Entity()
export class RendezVous {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  titre: string;

  @Column()
  avec: string;

  @Column()
  Date: string;

  @Column()
  Heure: string;

  @Column()
  lieu: string;

  @ManyToOne(() => Patient, (patient) => patient.rendezvous)
  patient: Patient;

  @ManyToOne(() => Docteur, (docteur) => docteur.rendezvous)
  docteur: Docteur;
}