import { Request, Response } from 'express';
import { GetBateriaVencedorService } from '../services/GetBateriaVencedorService';

class GetBateriaVencedorController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const service = new GetBateriaVencedorService();

    const result = await service.execute({ bateria_id: id });

    if (result instanceof Error) {
      return response.status(400).json({ mensagem: result.message });
    }

    return response.json(result);
  }
}

export { GetBateriaVencedorController };
