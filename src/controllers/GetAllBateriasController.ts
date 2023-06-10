import { Request, Response } from 'express';
import { GetAllBateriasService } from '../services/GetAllBateriasService';

class GetAllBateriasController {
  async handle(request: Request, response: Response) {
    const service = new GetAllBateriasService();

    const baterias = await service.execute();

    return response.json(baterias);
  }
}

export { GetAllBateriasController };
