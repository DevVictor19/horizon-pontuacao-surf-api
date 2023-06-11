import { AppDataSource } from '../../data-source';
import { Onda } from './Ondas.entity';

export const ondasRepository = AppDataSource.getRepository(Onda);
