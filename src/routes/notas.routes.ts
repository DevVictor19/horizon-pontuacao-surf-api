import { Router } from 'express';

import { CreateNotaController } from '../controllers/CreateNotaController';

const notasRoutes = Router();

notasRoutes.post('/', new CreateNotaController().handle);

export { notasRoutes };
