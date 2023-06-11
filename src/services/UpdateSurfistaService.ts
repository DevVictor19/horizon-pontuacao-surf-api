import { surfistasRepository } from '../database/postgres/surfistas/Surfistas.repository';

import { Surfista } from '../database/postgres/surfistas/Surfistas.entity';

type SurfistaUpdateRequest = {
  id: number;
  nome: string;
  pais: string;
};

class UpdateSurfistaService {
  async execute({
    id,
    nome,
    pais,
  }: SurfistaUpdateRequest): Promise<Surfista | Error> {
    const surfista = await surfistasRepository.findOneBy({ numero: id });

    if (!surfista) {
      return new Error('Surfista não cadastrado');
    }

    const updatedSurfista: Surfista = {
      ...surfista,
      ...(nome && { nome }),
      ...(pais && { pais }),
    };

    await surfistasRepository.save(updatedSurfista);

    return updatedSurfista;
  }
}

export { UpdateSurfistaService };
