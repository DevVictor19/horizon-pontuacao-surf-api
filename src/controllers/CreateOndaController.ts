import { Request, Response } from 'express';

import { CreateOndaService } from '../services/CreateOndaService';

class CreateOndaController {
  async handle(request: Request, response: Response) {
    const { bateria_id, surfista_numero } = request.body;

    const service = new CreateOndaService();

    try {
      const result = await service.execute({ bateria_id, surfista_numero });

      if (result instanceof Error) {
        return response.status(400).json({ mensagem: result.message });
      }

      return response.status(201).json(result);
    } catch {
      return response
        .status(500)
        .json({ mensagem: 'Não foi possível cadastrar nova onda' });
    }
  }
}

export { CreateOndaController };
