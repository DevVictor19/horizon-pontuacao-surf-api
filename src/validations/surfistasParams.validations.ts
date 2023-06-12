import { ValidateParamsSchema } from '../middlewares/ValidateParams';

export const surfistasParamsValidationSchema: ValidateParamsSchema = {
  id: {
    errorMessage: 'Parâmetro de pesquisa id inválido',
    validationFn: (value: string) => !isNaN(+value),
  },
};
