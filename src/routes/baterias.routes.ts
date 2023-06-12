import { Router } from 'express';

import { CreateBateriaController } from '../controllers/CreateBateriaController';
import { GetBateriaVencedorController } from '../controllers/GetBateriaVencedorController';

import { ValidateParams } from '../middlewares/ValidateParams';
import { ValidateBody } from '../middlewares/ValidateBody';

import { bateriasParamsValidationSchema } from '../validations/bateriasParams.validations';
import { createBateriaBodyValidationSchema } from '../validations/createBateriaBody.validations';

const bateriasRoutes = Router();

bateriasRoutes.post(
  '/',
  new ValidateBody().validate(createBateriaBodyValidationSchema),
  new CreateBateriaController().handle
);

bateriasRoutes.get(
  '/:id/vencedor',
  new ValidateParams().validate(bateriasParamsValidationSchema),
  new GetBateriaVencedorController().handle
);

export { bateriasRoutes };
