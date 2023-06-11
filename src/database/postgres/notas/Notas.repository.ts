import { AppDataSource } from '../../data-source';
import { Nota } from './Notas.entity';

export const notasRepository = AppDataSource.getRepository(Nota);
