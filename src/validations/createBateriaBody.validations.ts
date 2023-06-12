import { ValidateBodySchema } from '../middlewares/ValidateBody';
import { isNumber } from '../utils/isNumber';

export const createBateriaBodyValidationSchema: ValidateBodySchema = {
  surfista_1_numero: {
    errorMessage: 'O número do surfista 1 deve ser um valor numérico válido',
    required: true,
    validationFn: isNumber,
  },
  surfista_2_numero: {
    errorMessage: 'O número do surfista 2 deve ser um valor numérico válido',
    required: true,
    validationFn: isNumber,
  },
};
