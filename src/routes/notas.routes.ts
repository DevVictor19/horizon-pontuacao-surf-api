import { Router } from 'express';

import { CreateNotaController } from '../controllers/CreateNotaController';

import { ValidateBody } from '../middlewares/ValidateBody';

import { createNotaBodyValidationSchema } from '../validations/createNotaBody.validations';

const notasRoutes = Router();

notasRoutes.post(
  '/',
  new ValidateBody().validate(createNotaBodyValidationSchema),
  new CreateNotaController().handle
);

export { notasRoutes };
