import { Router } from 'express';

import { CreateSurfistaController } from '../controllers/CreateSurfistaController';
import { GetAllSurfistasController } from '../controllers/GetAllSurfistasController';
import { DeleteSurfistaController } from '../controllers/DeleteSurfistaController';
import { UpdateSurfistaController } from '../controllers/UpdateSurfistaController';

import { ValidateParams } from '../middlewares/ValidateParams';
import { ValidateBody } from '../middlewares/ValidateBody';

import { surfistasParamsValidationSchema } from '../validations/surfistasParams.validations';
import { createSurfistaBodyValidationSchema } from '../validations/createSurfistaBody.validations';
import { updateSurfistaBodyValidationSchema } from '../validations/updateSurfistaBody.validations';

const surfistasRoutes = Router();

surfistasRoutes.get('/', new GetAllSurfistasController().handle);

surfistasRoutes.post(
  '/',
  new ValidateBody().validate(createSurfistaBodyValidationSchema),
  new CreateSurfistaController().handle
);

surfistasRoutes.delete(
  '/:id',
  new ValidateParams().validate(surfistasParamsValidationSchema),
  new DeleteSurfistaController().handle
);

surfistasRoutes.put(
  '/:id',
  new ValidateParams().validate(surfistasParamsValidationSchema),
  new ValidateBody().validate(updateSurfistaBodyValidationSchema),
  new UpdateSurfistaController().handle
);

export { surfistasRoutes };
