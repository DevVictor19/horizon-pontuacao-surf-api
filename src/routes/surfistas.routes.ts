import { Router } from 'express';

import { CreateSurfistaController } from '../controllers/CreateSurfistaController';
import { GetAllSurfistasController } from '../controllers/GetAllSurfistasController';
import { DeleteSurfistaController } from '../controllers/DeleteSurfistaController';
import { UpdateSurfistaController } from '../controllers/UpdateSurfistaController';

import { ValidateParams } from '../middlewares/ValidateParams';
import { surfistasParamsValidationSchema } from '../validations/surfistasParams.validations';

const surfistasRoutes = Router();

surfistasRoutes.post('/', new CreateSurfistaController().handle);
surfistasRoutes.get('/', new GetAllSurfistasController().handle);

surfistasRoutes.delete(
  '/:id',
  new ValidateParams().validate(surfistasParamsValidationSchema),
  new DeleteSurfistaController().handle
);

surfistasRoutes.put(
  '/:id',
  new ValidateParams().validate(surfistasParamsValidationSchema),
  new UpdateSurfistaController().handle
);

export { surfistasRoutes };
