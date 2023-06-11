import { Router } from 'express';

import { CreateBateriaController } from '../controllers/CreateBateriaController';
import { GetAllBateriasController } from '../controllers/GetAllBateriasController';
import { GetBateriaVencedorController } from '../controllers/GetBateriaVencedorController';

import { ValidateParams } from '../middlewares/ValidateParams';
import { bateriasParamsValidationSchema } from '../validations/bateriasParams.validations';

const bateriasRoutes = Router();

bateriasRoutes.post('/', new CreateBateriaController().handle);
bateriasRoutes.get('/', new GetAllBateriasController().handle);

bateriasRoutes.get(
  '/:id/vencedor',
  new ValidateParams().validate(bateriasParamsValidationSchema),
  new GetBateriaVencedorController().handle
);

export { bateriasRoutes };
