import { Router } from 'express';
import { Routes } from '@interfaces/routes.interface';
import authMiddleware from '@middlewares/auth.middleware';
import MedicalHistoryController from '@/controllers/medicalHistories.controller';

class MedicalHistoryRoute implements Routes {
  public path = '/medicalHistories';
  public router = Router();
  public medicalHistoryController = new MedicalHistoryController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}/:petId`, authMiddleware, this.medicalHistoryController.getMedByPet);
  }
}

export default MedicalHistoryRoute;
