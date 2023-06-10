import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';

import { Bateria } from './Bateria';
import { Surfista } from './Surfista';

@Entity('ondas')
class Onda {
  @PrimaryColumn('uuid')
  id: string;

  @Column()
  bateria_id: string;

  @Column()
  surfista_numero: number;

  @ManyToOne(() => Bateria)
  @JoinColumn({ name: 'bateria_id' })
  bateria: Bateria;

  @ManyToOne(() => Surfista)
  @JoinColumn({ name: 'surfista_numero' })
  surfista: Surfista;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Onda };
