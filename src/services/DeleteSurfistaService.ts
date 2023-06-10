import { AppDataSource } from '../database/data-source';
import { Surfista } from '../entities/Surfista';

class DeleteSurfistaService {
  async execute(id: number): Promise<void | Error> {
    const repo = AppDataSource.getRepository(Surfista);

    if (!(await repo.findOneBy({ numero: id }))) {
      return new Error('Surfista não cadastrado');
    }

    await repo.delete({ numero: id });
  }
}

export { DeleteSurfistaService };
