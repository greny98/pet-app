/**
 * TODO: Pet Controller
 */
import PetService from '@services/pets.service';
import { NextFunction, Response } from 'express';
import { PaginationQuery } from '@interfaces/routes.interface';
import { RequestWithUser } from '@interfaces/auth.interface';

class PetController {
  public petService = new PetService();

  public getPets = async (req: RequestWithUser, res: Response) => {
    const { page = 0 } = req.query as any as PaginationQuery;
    const pets = await this.petService.getByUser(req.user._id, page);
    res.render('pets/list', { pets });
  };

  public createPet = async (req: RequestWithUser, res: Response) => {};
}

export default PetController;
