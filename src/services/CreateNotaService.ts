import { notasRepository } from '../database/postgres/notas/Notas.repository';
import { ondasRepository } from '../database/postgres/ondas/Ondas.repository';

import { Nota } from '../database/postgres/notas/Notas.entity';

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
    if (
      typeof onda_id !== 'string' ||
      typeof notaParcial1 !== 'number' ||
      typeof notaParcial2 !== 'number' ||
      typeof notaParcial3 !== 'number'
    ) {
      return new Error('Corpo da requisição inválida');
    }

    const onda = await ondasRepository.findOneBy({ id: onda_id });

    if (!onda) {
      return new Error('Onda não cadastrada');
    }

    const nota = notasRepository.create({
      onda_id,
      notaParcial1,
      notaParcial2,
      notaParcial3,
    });

    await notasRepository.save(nota);

    return nota;
  }
}

export { CreateNotaService };
