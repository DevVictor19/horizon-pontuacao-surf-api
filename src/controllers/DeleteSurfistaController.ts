import { Request, Response } from 'express';

import { DeleteSurfistaService } from '../services/DeleteSurfistaService';

class DeleteSurfistaController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const service = new DeleteSurfistaService();

    const result = await service.execute(+id);

    if (result instanceof Error) {
      return response.status(404).json({ mensagem: result.message });
    }

    return response.sendStatus(204);
  }
}

export { DeleteSurfistaController };
