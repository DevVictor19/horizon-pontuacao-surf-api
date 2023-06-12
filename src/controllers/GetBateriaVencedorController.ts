import { Request, Response } from 'express';
import { GetBateriaVencedorService } from '../services/GetBateriaVencedorService';

class GetBateriaVencedorController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const service = new GetBateriaVencedorService();

    try {
      const result = await service.execute({ bateria_id: id });

      if (result instanceof Error) {
        return response.status(400).json({ mensagem: result.message });
      }

      return response.json(result);
    } catch {
      return response
        .status(500)
        .json({ mensagem: 'Não foi possível obter o vencedor da bateria' });
    }
  }
}

export { GetBateriaVencedorController };
