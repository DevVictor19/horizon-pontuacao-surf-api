import { Request, Response } from 'express';

import { CreateSurfistaService } from '../services/CreateSurfistaService';

class CreateSurfistaController {
  async handle(request: Request, response: Response) {
    const { nome, pais } = request.body;

    const service = new CreateSurfistaService();

    const result = await service.execute({ nome, pais });

    if (result instanceof Error) {
      return response.status(400).json({ mensagem: result.message });
    }

    return response.status(201).json(result);
  }
}

export { CreateSurfistaController };
