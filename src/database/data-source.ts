import { DataSource } from 'typeorm';
import dotenv from 'dotenv';

import { CreateSurfistasTable1686315014145 } from './migrations/1686315014145-CreateSurfistasTable';
import { CreateBateriasTable1686315297529 } from './migrations/1686315297529-CreateBateriasTable';
import { CreateOndasTable1686315737993 } from './migrations/1686315737993-CreateOndasTable';
import { CreateNotasTable1686313624152 } from './migrations/1686313624152-CreateNotasTable';

dotenv.config();

const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.TYPEORM_HOST,
  port: +process.env.TYPEORM_PORT,
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  synchronize: true,
  logging: false,
  entities: [],
  migrations: [
    CreateSurfistasTable1686315014145,
    CreateBateriasTable1686315297529,
    CreateOndasTable1686315737993,
    CreateNotasTable1686313624152,
  ],
  subscribers: [],
});

export { AppDataSource };
