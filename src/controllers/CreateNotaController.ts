import { Request, Response } from 'express';
import { CreateNotaService } from '../services/CreateNotaService';

class CreateNotaController {
  async handle(request: Request, response: Response) {
    const { onda_id, notaParcial1, notaParcial2, notaParcial3 } = request.body;

    const service = new CreateNotaService();

    const result = await service.execute({
      onda_id,
      notaParcial1,
      notaParcial2,
      notaParcial3,
    });

    if (result instanceof Error) {
      return response.status(400).json({ mensagem: result.message });
    }

    return response.status(201).json(result);
  }
}

export { CreateNotaController };
