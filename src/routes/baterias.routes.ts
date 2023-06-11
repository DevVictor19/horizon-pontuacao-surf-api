import { Router } from 'express';

import { CreateBateriaController } from '../controllers/CreateBateriaController';
import { GetAllBateriasController } from '../controllers/GetAllBateriasController';
import { GetBateriaVencedorController } from '../controllers/GetBateriaVencedorController';

import { validateUuidV4Params } from '../middlewares/validateUuidV4Params';

const bateriasRoutes = Router();

bateriasRoutes.post('/', new CreateBateriaController().handle);
bateriasRoutes.get('/', new GetAllBateriasController().handle);

bateriasRoutes.get(
  '/:id/vencedor',
  validateUuidV4Params,
  new GetBateriaVencedorController().handle
);

export { bateriasRoutes };
