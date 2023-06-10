import { Router } from 'express';

import { CreateSurfistaController } from './controllers/CreateSurfistaController';
import { GetAllSurfistasController } from './controllers/GetAllSurfistasController';
import { DeleteSurfistaController } from './controllers/DeleteSurfistaController';
import { UpdateSurfistaController } from './controllers/UpdateSurfistaController';

import { CreateBateriaController } from './controllers/CreateBateriaController';
import { GetAllBateriasController } from './controllers/GetAllBateriasController';

import { CreateOndaController } from './controllers/CreateOndaController';

import { CreateNotaController } from './controllers/CreateNotaController';

const routes = Router();

routes.post('/surfistas', new CreateSurfistaController().handle);
routes.get('/surfistas', new GetAllSurfistasController().handle);
routes.delete('/surfistas/:id', new DeleteSurfistaController().handle);
routes.put('/surfistas/:id', new UpdateSurfistaController().handle);

routes.post('/baterias', new CreateBateriaController().handle);
routes.get('/baterias', new GetAllBateriasController().handle);

routes.post('/ondas', new CreateOndaController().handle);

routes.post('/notas', new CreateNotaController().handle);

export { routes };
