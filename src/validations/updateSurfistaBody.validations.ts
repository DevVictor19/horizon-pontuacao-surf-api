import { ValidateBodySchema } from '../middlewares/ValidateBody';
import { isString } from '../utils/isString';

export const updateSurfistaBodyValidationSchema: ValidateBodySchema = {
  nome: {
    errorMessage: 'O campo nome deve ser um valor de texto válido',
    required: false,
    validationFn: isString,
  },
  pais: {
    errorMessage: 'O campo país deve ser um valor de texto válido',
    required: false,
    validationFn: isString,
  },
};
