import { AppDataSource } from '../database/data-source';
import { Surfista } from '../entities/Surfista';

type SurfistaRequest = {
  nome: string;
  pais: string;
};

class CreateSurfistaService {
  async execute({ nome, pais }: SurfistaRequest): Promise<Surfista | Error> {
    const repo = AppDataSource.getRepository(Surfista);

    if (typeof nome !== 'string' || typeof pais !== 'string') {
      return new Error('Corpo da requisição inválida');
    }

    const surfista = repo.create({ nome, pais });

    await repo.save(surfista);

    return surfista;
  }
}

export { CreateSurfistaService };
