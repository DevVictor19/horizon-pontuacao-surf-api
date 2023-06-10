import { Request, Response } from 'express';

import { GetAllSurfistasService } from '../services/GetAllSurfistasService';

class GetAllSurfistasController {
  async handle(request: Request, response: Response) {
    const { query } = request;

    const service = new GetAllSurfistasService();

    const hasQueries = Object.keys(query).length > 0;

    const surfistas = await service.execute(hasQueries && query);

    return response.json(surfistas);
  }
}

export { GetAllSurfistasController };
