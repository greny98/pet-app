import { NextFunction, Response } from 'express';
import { RequestWithUser } from '@/interfaces/auth.interface';
import ImmunizationService from '@/services/immunizations.service';
import { Immunization } from '@interfaces/immunization.interface';
import PetService from '@/services/pets.service';
import moment from 'moment';
import { calcDate } from '@/utils/util';

interface getByPetParams {
  petId: string;
}

class ImmunizationsController {
  public immunizationService = new ImmunizationService();
  public petService = new PetService();

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
      const { petId } = req.params as any as getByPetParams;
      const petInfo: any = await this.petService.getById(petId);
      res.status(200).render('pages/form/immunization', {
        petInfo: { ...petInfo._doc, birthDate: moment(petInfo.birthDate).format('DD/MM/YYYY') },
      });
    } catch (error) {
      next(error);
    }
  };
  public createImmunizationPet = async (req: RequestWithUser, res: Response, next: NextFunction) => {
    try {
      const immunizationData = req.body;
      const { petId } = req.params as any as getByPetParams;
      const petInfo: any = await this.petService.getById(petId);
      immunizationData.pet = petId;
      immunizationData.age = calcDate(petInfo.birthDate);
      immunizationData.unit = 'M';
      const createImmunizationData: Immunization = await this.immunizationService.createImmunization(immunizationData);

      res.status(201).json({ data: createImmunizationData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };
}

export default ImmunizationsController;
