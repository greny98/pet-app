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
    this.router.get(`${this.path}/create`, authMiddleware, this.medicalHistoryController.getMedForm);
    this.router.post(`${this.path}/:petId`, authMiddleware, this.medicalHistoryController.createMedByPet);
  }
}

export default MedicalHistoryRoute;
