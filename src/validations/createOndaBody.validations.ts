import { ValidateBodySchema } from '../middlewares/ValidateBody';
import { isNumber } from '../utils/isNumber';
import { validateUuidV4 } from '../utils/validateUuidV4';

export const createOndaBodyValidationSchema: ValidateBodySchema = {
  bateria_id: {
    errorMessage: 'O id da bateria deve ser um uuidV4 válido',
    required: true,
    validationFn: validateUuidV4,
  },
  surfista_numero: {
    errorMessage: 'O número do surfista deve ser um valor numérico válido',
    required: true,
    validationFn: isNumber,
  },
};
