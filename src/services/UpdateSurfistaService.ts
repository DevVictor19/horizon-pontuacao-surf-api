import { AppDataSource } from '../database/data-source';
import { Surfista } from '../entities/Surfista';

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
    const repo = AppDataSource.getRepository(Surfista);

    const surfista = await repo.findOneBy({ numero: id });

    if (!surfista) {
      return new Error('Surfista não cadastrado');
    }

    const updatedSurfista: Surfista = {
      ...surfista,
      ...(nome && { nome }),
      ...(pais && { pais }),
    };

    await repo.save(updatedSurfista);

    return updatedSurfista;
  }
}

export { UpdateSurfistaService };
