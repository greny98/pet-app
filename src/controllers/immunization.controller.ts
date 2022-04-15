import { NextFunction, Response } from 'express';
import { RequestWithUser } from '@/interfaces/auth.interface';
import ImmunizationService from '@/services/immunizations.service';

interface getByPetParams {
  petId: string;
}

class ImmunizationsController {
  public immunizationService = new ImmunizationService();

  public getImmunizationPet = async (req: RequestWithUser, res: Response, next: NextFunction) => {
    try {
      const { petId } = req.params as any as getByPetParams;
      const histories = await this.immunizationService.getByPetId(petId);
      res.status(200).json({ data: histories });
    } catch (error) {
      next(error);
    }
  };
  public getImmunizationForm = async (req: RequestWithUser, res: Response, next: NextFunction) => {
    try {
      res.status(200).render('pages/form/immunization');
    } catch (error) {
      next(error);
    }
  };
  // TODO-HA: create immunization
  public createImmunizationPet = async (req: RequestWithUser, res: Response, next: NextFunction) => {
    try {
    } catch (error) {
      next(error);
    }
  };
}

export default ImmunizationsController;
