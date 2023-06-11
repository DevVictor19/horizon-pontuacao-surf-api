import { AppDataSource } from '../database/data-source';
import { Surfista } from '../entities/Surfista';

type Query = Partial<Surfista>;

class GetAllSurfistasService {
  async execute(query?: Query): Promise<Surfista[]> {
    const repo = AppDataSource.getRepository(Surfista);

    const surfistas = await repo.find(
      query && {
        where: {
          ...(query.nome && { nome: query.nome }),
          ...(query.numero && { numero: query.numero }),
          ...(query.pais && { pais: query.pais }),
        },
      }
    );

    return surfistas;
  }
}

export { GetAllSurfistasService };
