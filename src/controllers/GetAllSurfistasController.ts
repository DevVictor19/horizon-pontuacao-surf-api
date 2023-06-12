import { Request, Response } from 'express';

import { GetAllSurfistasService } from '../services/GetAllSurfistasService';

class GetAllSurfistasController {
  async handle(request: Request, response: Response) {
    const { query } = request;

    const service = new GetAllSurfistasService();

    try {
      const surfistas = await service.execute(query);

      return response.json(surfistas);
    } catch {
      return response
        .status(500)
        .json({ mensagem: 'Não foi possível listar surfistas' });
    }
  }
}

export { GetAllSurfistasController };
