import { bateriasRepository } from '../database/postgres/baterias/Baterias.repository';
import { surfistasRepository } from '../database/postgres/surfistas/Surfistas.repository';

import { Bateria } from '../database/postgres/baterias/Baterias.entity';

type BateriaRequest = {
  surfista_1_numero: number;
  surfista_2_numero: number;
};

class CreateBateriaService {
  async execute({
    surfista_1_numero,
    surfista_2_numero,
  }: BateriaRequest): Promise<Bateria | Error> {
    if (surfista_1_numero === surfista_2_numero) {
      return new Error(
        'Uma bateria deve ser composta por surfistas diferentes'
      );
    }

    const [surfista_1, surfista_2] = await Promise.all([
      surfistasRepository.findOneBy({ numero: surfista_1_numero }),
      surfistasRepository.findOneBy({ numero: surfista_2_numero }),
    ]);

    if (!surfista_1 || !surfista_2) {
      return new Error('Todos os surfistas devem estar cadastrados');
    }

    const bateria = bateriasRepository.create({
      surfista_1_numero,
      surfista_2_numero,
    });

    await bateriasRepository.save(bateria);

    return bateria;
  }
}

export { CreateBateriaService };
