import { NextFunction, Request, RequestHandler, Response } from 'express';
import { RequestWithUser } from '@/interfaces/auth.interface';
import MedicalHistoriesService from '@/services/medicalHistories.service';

class MedicalHistoryController {
  public medicalHistoryService = new MedicalHistoriesService();

  public getMedHistory = async (req: RequestWithUser, res: Response, next: NextFunction) => {
    try {
      const userId = req.user._id;
      console.log('🚀 ~ file: medicalHistories.controller.ts ~ line 14 ~ MedicalHistoryController ~ getMedHistory= ~ userId', userId);
      const histories = await this.medicalHistoryService.getAll(userId);
      console.log('🚀 ~ file: medicalHistories.controller.ts ~ line 15 ~ MedicalHistoryController ~ getMedHistory= ~ histories', histories);
      res.send('Done');
    } catch (error) {
      next(error);
    }
  };
}

export default MedicalHistoryController;
