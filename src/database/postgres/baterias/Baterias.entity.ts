import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';

import { Surfista } from '../surfistas/Surfistas.entity';

@Entity('baterias')
class Bateria {
  @PrimaryColumn('uuid')
  id: string;

  @Column()
  surfista_1_numero: number;

  @Column()
  surfista_2_numero: number;

  @ManyToOne(() => Surfista)
  @JoinColumn({ name: 'surfista_1_numero' })
  surfista_1: Surfista;

  @ManyToOne(() => Surfista)
  @JoinColumn({ name: 'surfista_2_numero' })
  surfista_2: Surfista;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Bateria };
