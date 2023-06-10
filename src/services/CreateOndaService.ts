import { AppDataSource } from '../database/data-source';
import { Bateria } from '../entities/Bateria';
import { Onda } from '../entities/Onda';
import { Surfista } from '../entities/Surfista';

type OndaRequest = {
  bateria_id: string;
  surfista_numero: number;
};

class CreateOndaService {
  async execute({
    bateria_id,
    surfista_numero,
  }: OndaRequest): Promise<Onda | Error> {
    const ondasRepo = AppDataSource.getRepository(Onda);
    const bateriasRepo = AppDataSource.getRepository(Bateria);
    const surfistasRepo = AppDataSource.getRepository(Surfista);

    if (typeof bateria_id !== 'string' || typeof surfista_numero !== 'number') {
      return new Error('Corpo da requisição inválida');
    }

    if (!(await bateriasRepo.findOneBy({ id: bateria_id }))) {
      return new Error('Bateria não cadastrada');
    }

    if (!(await surfistasRepo.findOneBy({ numero: surfista_numero }))) {
      return new Error('Surfista não cadastrado');
    }

    const onda = ondasRepo.create({ bateria_id, surfista_numero });

    await ondasRepo.save(onda);

    return onda;
  }
}

export { CreateOndaService };
