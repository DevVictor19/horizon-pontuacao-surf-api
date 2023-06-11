import { DataSource } from 'typeorm';
import dotenv from 'dotenv';

import { Surfista } from '../entities/Surfista';
import { Bateria } from '../entities/Bateria';
import { Onda } from '../entities/Onda';
import { Nota } from '../entities/Nota';

import { CreateSurfistasTable1686401690786 } from './migrations/1686401690786-CreateSurfistasTable';
import { CreateBateriasTable1686401766360 } from './migrations/1686401766360-CreateBateriasTable';
import { CreateOndasTable1686401811113 } from './migrations/1686401811113-CreateOndasTable';
import { CreateNotasTable1686401861334 } from './migrations/1686401861334-CreateNotasTable';

dotenv.config();

const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.TYPEORM_HOST,
  port: Number(process.env.TYPEORM_PORT),
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  synchronize: true,
  logging: false,
  entities: [Surfista, Bateria, Onda, Nota],
  migrations: [
    CreateSurfistasTable1686401690786,
    CreateBateriasTable1686401766360,
    CreateOndasTable1686401811113,
    CreateNotasTable1686401861334,
  ],
  subscribers: [],
});

export { AppDataSource };
