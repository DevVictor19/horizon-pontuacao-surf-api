import { AppDataSource } from '../../data-source';
import { Bateria } from './Baterias.entity';

export const bateriasRepository = AppDataSource.getRepository(Bateria);
