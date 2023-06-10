import { Entity, Column, PrimaryColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity('baterias')
class Bateria {
  @PrimaryColumn('uuid')
  id: string;

  @Column()
  surfista_1_numero: number;

  @Column()
  surfista_2_numero: number;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Bateria };
