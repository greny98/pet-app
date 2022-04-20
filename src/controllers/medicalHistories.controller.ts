import { NextFunction, Response } from 'express';
import { RequestWithUser } from '@/interfaces/auth.interface';
import MedicalHistoriesService from '@/services/medicalHistories.service';
import { MedicalHistory } from '@interfaces/medicalHistory.interface';
import PetService from '@/services/pets.service';

interface getByPetParams {
  petId: string;
}

class MedicalHistoryController {
  public medicalHistoryService = new MedicalHistoriesService();
  public petService = new PetService();

  public getMedByPet = async (req: RequestWithUser, res: Response, next: NextFunction) => {
    try {
      const userId = req.user._id;
      const { petId } = req.params;
      const histories = await this.medicalHistoryService.getByPetId(userId, petId);
      res.status(200).json({ data: histories });
    } catch (error) {
      next(error);
    }
  };
  public getMedForm = async (req: RequestWithUser, res: Response, next: NextFunction) => {
    try {
      const { petId } = req.params as any as getByPetParams;
      const petInfo: any = await this.petService.getById(petId);
      res.status(200).render('pages/form/medical-history', { petInfo });
    } catch (error) {
      next(error);
    }
  };
  public createMedByPet = async (req: RequestWithUser, res: Response, next: NextFunction) => {
    try {
      const medData = req.body;
      medData.user = req.user._id;
      medData.pet = req.params.petId;
      const createMedData: MedicalHistory = await this.medicalHistoryService.createMedicalHistory(medData);

      res.status(201).json({ data: createMedData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };
}

export default MedicalHistoryController;
