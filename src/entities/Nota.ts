import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';

import { Onda } from './Onda';

@Entity('notas')
class Nota {
  @PrimaryColumn('uuid')
  id: string;

  @Column()
  onda_id: string;

  @Column()
  notaParcial1: number;

  @Column()
  notaParcial2: number;

  @Column()
  notaParcial3: number;

  @ManyToOne(() => Onda)
  @JoinColumn({ name: 'onda_id' })
  onda: Onda;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Nota };
