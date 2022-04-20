import { NextFunction, Response } from 'express';
import { RequestWithUser } from '@/interfaces/auth.interface';
import DewormingService from '@/services/deworming.service';
import { Dewormings } from '@interfaces/dewormings.interface';

interface getByPetParams {
  petId: string;
}

class DewormingController {
  public dewormingService = new DewormingService();

  public getDewormPet = async (req: RequestWithUser, res: Response, next: NextFunction) => {
    try {
      const { petId } = req.params as any as getByPetParams;
      const histories = await this.dewormingService.getByPetId(petId);
      res.status(200).json({ data: histories });
    } catch (error) {
      next(error);
    }
  };
  public getDewormForm = async (req: RequestWithUser, res: Response, next: NextFunction) => {
    try {
      res.status(200).render('pages/form/deworming');
    } catch (error) {
      next(error);
    }
  };
  // TODO-HA: create deworm
  public createDewormPet = async (req: RequestWithUser, res: Response, next: NextFunction) => {
    try {
      const dewormingData = req.body;
      dewormingData.pet = req.params.petId;
      const createDewormingData: Dewormings = await this.dewormingService.createDeworm(dewormingData);

      res.status(201).json({ data: createDewormingData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };
}

export default DewormingController;
