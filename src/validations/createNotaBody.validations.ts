import { ValidateBodySchema } from '../middlewares/ValidateBody';
import { isNumber } from '../utils/isNumber';
import { validateUuidV4 } from '../utils/validateUuidV4';

export const createNotaBodyValidationSchema: ValidateBodySchema = {
  onda_id: {
    errorMessage: 'O id da onda deve ser um uuidV4 válido',
    validationFn: validateUuidV4,
  },
  notaParcial1: {
    errorMessage: 'A nota parcial 1 deve ser um valor numérico',
    validationFn: isNumber,
  },
  notaParcial2: {
    errorMessage: 'A nota parcial 2 deve ser um valor numérico',
    validationFn: isNumber,
  },
  notaParcial3: {
    errorMessage: 'A nota parcial 3 deve ser um valor numérico',
    validationFn: isNumber,
  },
};
