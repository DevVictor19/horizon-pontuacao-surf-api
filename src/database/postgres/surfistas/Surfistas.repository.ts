import { AppDataSource } from '../../data-source';
import { Surfista } from './Surfistas.entity';

export const surfistasRepository = AppDataSource.getRepository(Surfista);
