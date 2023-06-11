import { Surfista } from '../database/postgres/surfistas/Surfistas.entity';
import { surfistasRepository } from '../database/postgres/surfistas/Surfistas.repository';

type Query = Partial<Surfista>;

class GetAllSurfistasService {
  async execute(query?: Query): Promise<Surfista[]> {
    const surfistas = await surfistasRepository.find(
      query && {
        where: {
          ...(query.nome && { nome: query.nome }),
          ...(query.pais && { pais: query.pais }),
        },
      }
    );

    return surfistas;
  }
}

export { GetAllSurfistasService };
