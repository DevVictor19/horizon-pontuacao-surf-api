import { Router } from 'express';

import { CreateBateriaController } from '../controllers/CreateBateriaController';
import { GetAllBateriasController } from '../controllers/GetAllBateriasController';

const bateriasRoutes = Router();

bateriasRoutes.post('/', new CreateBateriaController().handle);
bateriasRoutes.get('/', new GetAllBateriasController().handle);

export { bateriasRoutes };
