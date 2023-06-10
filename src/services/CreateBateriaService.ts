import { AppDataSource } from '../database/data-source';

import { Bateria } from '../entities/Bateria';
import { Surfista } from '../entities/Surfista';

type BateriaRequest = {
  surfista_1_numero: number;
  surfista_2_numero: number;
};

class CreateBateriaService {
  async execute({
    surfista_1_numero,
    surfista_2_numero,
  }: BateriaRequest): Promise<Bateria | Error> {
    const bateriasRepo = AppDataSource.getRepository(Bateria);
    const surfistasRepo = AppDataSource.getRepository(Surfista);

    if (
      typeof surfista_1_numero !== 'number' ||
      typeof surfista_2_numero !== 'number'
    ) {
      return new Error('Corpo da requisição inválida');
    }

    if (surfista_1_numero === surfista_2_numero) {
      return new Error(
        'Uma bateria deve ser composta por surfistas diferentes'
      );
    }

    const [surfista_1, surfista_2] = await Promise.all([
      surfistasRepo.findOneBy({ numero: surfista_1_numero }),
      surfistasRepo.findOneBy({ numero: surfista_2_numero }),
    ]);

    if (!surfista_1 || !surfista_2) {
      return new Error('Todos os surfistas devem estar cadastrados');
    }

    const bateria = bateriasRepo.create({
      surfista_1_numero,
      surfista_2_numero,
    });

    await bateriasRepo.save(bateria);

    return bateria;
  }
}

export { CreateBateriaService };
