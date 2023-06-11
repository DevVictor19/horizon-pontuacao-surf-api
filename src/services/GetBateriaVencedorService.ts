import { AppDataSource } from '../database/data-source';

import { Bateria } from '../entities/Bateria';
import { Nota } from '../entities/Nota';
import { Onda } from '../entities/Onda';

type BateriaVencedorRequest = {
  bateria_id: string;
};

type BateriaVencedorResponse = {
  bateria_id: string;
  vencedor_surfista_numero?: number;
  empate: boolean;
};

class GetBateriaVencedorService {
  async execute({
    bateria_id,
  }: BateriaVencedorRequest): Promise<BateriaVencedorResponse | Error> {
    const bateriasRepo = AppDataSource.getRepository(Bateria);

    const bateria = await bateriasRepo.findOneBy({ id: bateria_id });

    if (!bateria) {
      return new Error('Bateria não cadastrada');
    }

    const ondasRepo = AppDataSource.getRepository(Onda);

    const bateriaOndas = await ondasRepo.findBy({ bateria_id });

    if (bateriaOndas.length === 0) {
      return new Error('A bateria ainda não possui ondas cadastradas');
    }

    const surfista_1_numero = bateria.surfista_1_numero;
    const surfista_2_numero = bateria.surfista_2_numero;

    const bothHaveWaves = bateriaOndas.some(
      (onda) => onda.surfista_numero !== surfista_1_numero
    );

    if (!bothHaveWaves) {
      return new Error('Nem todos os surfistas possuem ondas cadastradas');
    }

    const notasRepo = AppDataSource.getRepository(Nota);

    const queries_notas_surfista_1: Promise<Nota[]>[] = [];
    const queries_notas_surfista_2: Promise<Nota[]>[] = [];

    bateriaOndas.forEach((onda) => {
      if (onda.surfista_numero === surfista_1_numero) {
        const query = notasRepo.findBy({ onda_id: onda.id });

        queries_notas_surfista_1.push(query);
      }

      if (onda.surfista_numero === surfista_2_numero) {
        const query = notasRepo.findBy({ onda_id: onda.id });

        queries_notas_surfista_2.push(query);
      }
    });

    const notas_surfista_1 = (
      await Promise.all([...queries_notas_surfista_1])
    ).flat();

    if (notas_surfista_1.length < 2) {
      return new Error(
        'O surfista 1 não possui notas o suficiente cadastradas'
      );
    }

    const notas_surfista_2 = (
      await Promise.all([...queries_notas_surfista_2])
    ).flat();

    if (notas_surfista_2.length < 2) {
      return new Error(
        'O surfista 2 não possui notas o suficiente cadastradas'
      );
    }

    const sorted_medias_aritmeticas_notas_surfista_1: number[] =
      notas_surfista_1
        .map((nota) => {
          const { notaParcial1, notaParcial2, notaParcial3 } = nota;

          return (notaParcial1 + notaParcial2 + notaParcial3) / 3;
        })
        .sort((a, b) => b - a); // sort ordem decrescente

    const sorted_medias_aritmeticas_notas_surfista_2: number[] =
      notas_surfista_2
        .map((nota) => {
          const { notaParcial1, notaParcial2, notaParcial3 } = nota;

          return (notaParcial1 + notaParcial2 + notaParcial3) / 3;
        })
        .sort((a, b) => b - a); // sort ordem decrescente

    const soma_duas_maiores_notas_surfista_1 =
      sorted_medias_aritmeticas_notas_surfista_1[0] +
      sorted_medias_aritmeticas_notas_surfista_1[1];

    const soma_duas_maiores_notas_surfista_2 =
      sorted_medias_aritmeticas_notas_surfista_2[0] +
      sorted_medias_aritmeticas_notas_surfista_2[1];

    if (
      soma_duas_maiores_notas_surfista_1 > soma_duas_maiores_notas_surfista_2
    ) {
      return {
        bateria_id,
        vencedor_surfista_numero: surfista_1_numero,
        empate: false,
      };
    }

    if (
      soma_duas_maiores_notas_surfista_2 > soma_duas_maiores_notas_surfista_1
    ) {
      return {
        bateria_id,
        vencedor_surfista_numero: surfista_2_numero,
        empate: false,
      };
    }

    return {
      bateria_id,
      empate: true,
    };
  }
}

export { GetBateriaVencedorService };
