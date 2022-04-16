import { Router } from 'express';
import { Routes } from '@interfaces/routes.interface';
import authMiddleware from '@middlewares/auth.middleware';
import ImmunizationsController from '@/controllers/immunization.controller';

class ImmunizationRoute implements Routes {
  public path = '/immunization';
  public router = Router();
  public immunizationController = new ImmunizationsController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}/:petId`, authMiddleware, this.immunizationController.getImmunizationPet);
    this.router.get(`${this.path}/create`, authMiddleware, this.immunizationController.getImmunizationForm);

  }
}

export default ImmunizationRoute;
