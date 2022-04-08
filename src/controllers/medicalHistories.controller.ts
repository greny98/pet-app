import { NextFunction, Response } from 'express';
import { RequestWithUser } from '@/interfaces/auth.interface';
import MedicalHistoriesService from '@/services/medicalHistories.service';

class MedicalHistoryController {
  public medicalHistoryService = new MedicalHistoriesService();

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
}

export default MedicalHistoryController;
