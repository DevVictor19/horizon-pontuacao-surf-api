import { Router } from 'express';

import { CreateOndaController } from '../controllers/CreateOndaController';

import { ValidateBody } from '../middlewares/ValidateBody';

import { createOndaBodyValidationSchema } from '../validations/createOndaBody.validations';

const ondasRoutes = Router();

ondasRoutes.post(
  '/',
  new ValidateBody().validate(createOndaBodyValidationSchema),
  new CreateOndaController().handle
);

export { ondasRoutes };
