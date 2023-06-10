import { AppDataSource } from '../database/data-source';
import { Surfista } from '../entities/Surfista';

type Query = Partial<Surfista>;

class GetAllSurfistasService {
  async execute(query?: Query): Promise<Surfista[]> {
    const repo = AppDataSource.getRepository(Surfista);

    const { nome, numero, pais } = query;

    const surfistas = await repo.find(
      query && {
        where: {
          ...(nome && { nome }),
          ...(numero && { numero }),
          ...(pais && { pais }),
        },
      }
    );

    return surfistas;
  }
}

export { GetAllSurfistasService };
