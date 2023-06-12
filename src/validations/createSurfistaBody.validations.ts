import { ValidateBodySchema } from '../middlewares/ValidateBody';
import { isString } from '../utils/isString';

export const createSurfistaBodyValidationSchema: ValidateBodySchema = {
  nome: {
    errorMessage: 'O campo nome deve ser um valor de texto válido',
    required: true,
    validationFn: isString,
  },
  pais: {
    errorMessage: 'O campo país deve ser um valor de texto válido',
    required: true,
    validationFn: isString,
  },
};
