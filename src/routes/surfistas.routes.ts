import { Router } from 'express';

import { CreateSurfistaController } from '../controllers/CreateSurfistaController';
import { GetAllSurfistasController } from '../controllers/GetAllSurfistasController';
import { DeleteSurfistaController } from '../controllers/DeleteSurfistaController';
import { UpdateSurfistaController } from '../controllers/UpdateSurfistaController';

const surfistasRoutes = Router();

surfistasRoutes.post('/', new CreateSurfistaController().handle);
surfistasRoutes.get('/', new GetAllSurfistasController().handle);
surfistasRoutes.delete('/:id', new DeleteSurfistaController().handle);
surfistasRoutes.put('/:id', new UpdateSurfistaController().handle);

export { surfistasRoutes };
