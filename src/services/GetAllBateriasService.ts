import { bateriasRepository } from '../database/postgres/baterias/Baterias.repository';

import { Bateria } from '../database/postgres/baterias/Baterias.entity';

class GetAllBateriasService {
  async execute(): Promise<Bateria[]> {
    const baterias = await bateriasRepository.find();

    return baterias;
  }
}

export { GetAllBateriasService };
