import { bateriasRepository } from '../database/postgres/baterias/Baterias.repository';
import { ondasRepository } from '../database/postgres/ondas/Ondas.repository';
import { surfistasRepository } from '../database/postgres/surfistas/Surfistas.repository';

import { Onda } from '../database/postgres/ondas/Ondas.entity';

type OndaRequest = {
  bateria_id: string;
  surfista_numero: number;
};

class CreateOndaService {
  async execute({
    bateria_id,
    surfista_numero,
  }: OndaRequest): Promise<Onda | Error> {
    const bateria = await bateriasRepository.findOneBy({ id: bateria_id });

    if (!bateria) {
      return new Error('Bateria não cadastrada');
    }

    if (
      bateria.surfista_1_numero !== surfista_numero &&
      bateria.surfista_2_numero !== surfista_numero
    ) {
      return new Error('O surfista não está cadastrado na bateria');
    }

    const surfista = await surfistasRepository.findOneBy({
      numero: surfista_numero,
    });

    if (!surfista) {
      return new Error('Surfista não cadastrado');
    }

    const onda = ondasRepository.create({ bateria_id, surfista_numero });

    await ondasRepository.save(onda);

    return onda;
  }
}

export { CreateOndaService };
