import { Request, Response } from 'express';

import { UpdateSurfistaService } from '../services/UpdateSurfistaService';

class UpdateSurfistaController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const { nome, pais } = request.body;

    const service = new UpdateSurfistaService();

    const result = await service.execute({ id: +id, nome, pais });

    if (result instanceof Error) {
      return response.status(404).json({ mensagem: result.message });
    }

    return response.json(result);
  }
}

export { UpdateSurfistaController };
