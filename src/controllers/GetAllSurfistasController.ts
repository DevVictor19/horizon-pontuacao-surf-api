import { Request, Response } from 'express';

import { GetAllSurfistasService } from '../services/GetAllSurfistasService';

class GetAllSurfistasController {
  async handle(request: Request, response: Response) {
    const { query } = request;

    const service = new GetAllSurfistasService();

    const surfistas = await service.execute(query);

    return response.json(surfistas);
  }
}

export { GetAllSurfistasController };
