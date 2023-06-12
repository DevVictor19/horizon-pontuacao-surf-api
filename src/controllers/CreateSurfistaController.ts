import { Request, Response } from 'express';

import { CreateSurfistaService } from '../services/CreateSurfistaService';

class CreateSurfistaController {
  async handle(request: Request, response: Response) {
    const { nome, pais } = request.body;

    const service = new CreateSurfistaService();

    try {
      const result = await service.execute({ nome, pais });

      if (result instanceof Error) {
        return response.status(400).json({ mensagem: result.message });
      }

      return response.status(201).json(result);
    } catch {
      return response
        .status(500)
        .json({ mensagem: 'Não foi possível cadastrar novo surfista' });
    }
  }
}

export { CreateSurfistaController };
