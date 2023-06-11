import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('surfistas')
class Surfista {
  @PrimaryGeneratedColumn()
  numero: number;

  @Column()
  nome: string;

  @Column()
  pais: string;
}

export { Surfista };
