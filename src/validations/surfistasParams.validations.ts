import { ValidateParamsSchema } from '../middlewares/ValidateParams';
import { isNumber } from '../utils/isNumber';

export const surfistasParamsValidationSchema: ValidateParamsSchema = {
  id: {
    errorMessage: 'Parâmetro de pesquisa id inválido',
    validationFn: isNumber,
  },
};
