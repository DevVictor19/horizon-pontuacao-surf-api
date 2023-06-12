import { surfistasRepository } from '../database/postgres/surfistas/Surfistas.repository';

class DeleteSurfistaService {
  async execute(id: number): Promise<void | Error> {
    const surfista = await surfistasRepository.findOneBy({ numero: id });

    if (!surfista) {
      return new Error('Surfista não cadastrado');
    }

    await surfistasRepository.delete({ numero: id });
  }
}

export { DeleteSurfistaService };
