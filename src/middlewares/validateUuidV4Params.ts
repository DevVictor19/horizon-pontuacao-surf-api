import { Request, Response, NextFunction } from 'express';

export function validateUuidV4Params(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const { id } = request.params;

  const uuid_v4_regex =
    /^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i;

  const isValid_uuid = uuid_v4_regex.test(id);

  if (!isValid_uuid) {
    return response
      .status(400)
      .json({ mensagem: 'O parâmetro de busca deve ser um uuidV4 válido' });
  }

  next();
}
