import { ValidateParamsSchema } from '../middlewares/ValidateParams';
import { validateUuidV4 } from '../utils/validateUuidV4';

export const bateriasParamsValidationSchema: ValidateParamsSchema = {
  id: {
    errorMessage: 'O parâmetro de busca deve ser um uuidV4 válido',
    validationFn: validateUuidV4,
  },
};
