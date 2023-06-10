import { AppDataSource } from '../database/data-source';
import { Nota } from '../entities/Nota';
import { Onda } from '../entities/Onda';

type NotaRequest = {
  onda_id: string;
  notaParcial1: number;
  notaParcial2: number;
  notaParcial3: number;
};

class CreateNotaService {
  async execute({
    onda_id,
    notaParcial1,
    notaParcial2,
    notaParcial3,
  }: NotaRequest): Promise<Nota | Error> {
    const notaRepo = AppDataSource.getRepository(Nota);
    const ondaRepo = AppDataSource.getRepository(Onda);

    if (
      typeof onda_id !== 'string' ||
      typeof notaParcial1 !== 'number' ||
      typeof notaParcial2 !== 'number' ||
      typeof notaParcial3 !== 'number'
    ) {
      return new Error('Corpo da requisição inválida');
    }

    const onda = await ondaRepo.findOneBy({ id: onda_id });

    if (!onda) {
      return new Error('Onda não cadastrada');
    }

    const nota = notaRepo.create({
      onda_id,
      notaParcial1,
      notaParcial2,
      notaParcial3,
    });

    await notaRepo.save(nota);

    return nota;
  }
}

export { CreateNotaService };
