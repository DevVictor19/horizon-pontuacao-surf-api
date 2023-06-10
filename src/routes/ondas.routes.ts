import { Router } from 'express';

import { CreateOndaController } from '../controllers/CreateOndaController';

const ondasRoutes = Router();

ondasRoutes.post('/', new CreateOndaController().handle);

export { ondasRoutes };
