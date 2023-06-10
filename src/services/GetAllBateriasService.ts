import { AppDataSource } from '../database/data-source';
import { Bateria } from '../entities/Bateria';

class GetAllBateriasService {
  async execute(): Promise<Bateria[]> {
    const repo = AppDataSource.getRepository(Bateria);

    const baterias = await repo.find();

    return baterias;
  }
}

export { GetAllBateriasService };
