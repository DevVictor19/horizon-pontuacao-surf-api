import { surfistasRepository } from '../database/postgres/surfistas/Surfistas.repository';

import { Surfista } from '../database/postgres/surfistas/Surfistas.entity';

type SurfistaRequest = {
  nome: string;
  pais: string;
};

class CreateSurfistaService {
  async execute({ nome, pais }: SurfistaRequest): Promise<Surfista | Error> {
    const surfista = surfistasRepository.create({ nome, pais });

    await surfistasRepository.save(surfista);

    return surfista;
  }
}

export { CreateSurfistaService };
