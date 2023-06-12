import { Request, Response } from 'express';
import { CreateBateriaService } from '../services/CreateBateriaService';

class CreateBateriaController {
  async handle(request: Request, response: Response) {
    const { surfista_1_numero, surfista_2_numero } = request.body;

    const service = new CreateBateriaService();

    try {
      const result = await service.execute({
        surfista_1_numero,
        surfista_2_numero,
      });

      if (result instanceof Error) {
        return response.status(400).json({ mensagem: result.message });
      }

      return response.status(201).json(result);
    } catch {
      return response
        .status(500)
        .json({ mensagem: 'Não foi possível cadastrar nova bateria' });
    }
  }
}

export { CreateBateriaController };
