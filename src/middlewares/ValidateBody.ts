import { Request, Response, NextFunction } from 'express';

type Rules = {
  errorMessage: string;
  required: boolean;
  validationFn: (value: any) => boolean;
};

export type ValidateBodySchema = {
  [key: string]: Rules;
};

class ValidateBody {
  validate(schema: ValidateBodySchema) {
    return function (request: Request, response: Response, next: NextFunction) {
      const { body } = request;

      const errors: string[] = [];

      Object.keys(schema).forEach((item) => {
        const bodyItem = body[item];

        if (bodyItem === undefined && schema[item].required === false) {
          return;
        }

        const isValid = schema[item].validationFn(bodyItem);

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

export { ValidateBody };
