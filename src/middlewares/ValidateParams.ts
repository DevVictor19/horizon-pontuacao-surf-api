import { Request, Response, NextFunction } from 'express';

type Rules = {
  errorMessage: string;
  validationFn: (value: string) => boolean;
};

export type ValidateParamsSchema = {
  [key: string]: Rules;
};

class ValidateParams {
  validate(schema: ValidateParamsSchema) {
    return function (request: Request, response: Response, next: NextFunction) {
      const { params } = request;

      const errors: string[] = [];

      Object.keys(schema).forEach((item) => {
        const param = params[item];

        const isValid = schema[item].validationFn(param);

        if (!isValid) {
          errors.push(schema[item].errorMessage);
        }
      });

      if (errors.length > 0) {
        return response.status(400).json({ erros: errors });
      }

      return next();
    };
  }
}

export { ValidateParams };
