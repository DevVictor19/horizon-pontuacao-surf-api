import { validateUuidV4 } from '../utils/validateUuidV4';

import { ValidateParamsSchema } from '../middlewares/ValidateParams';

export const bateriasParamsValidationSchema: ValidateParamsSchema = {
  id: {
    errorMessage: 'O parâmetro de busca deve ser um uuidV4 válido',
    validationFn: validateUuidV4,
  },
};
