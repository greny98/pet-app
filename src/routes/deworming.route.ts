import { Router } from 'express';
import { Routes } from '@interfaces/routes.interface';
import authMiddleware from '@middlewares/auth.middleware';
import DewormingController from '@/controllers/deworming.controller';

class DewormingRoute implements Routes {
  public path = '/deworming';
  public router = Router();
  public dewormingController = new DewormingController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}/:petId`, authMiddleware, this.dewormingController.getDewormPet);
    this.router.get(`${this.path}/create`, authMiddleware, this.dewormingController.getDewormForm);
    this.router.post(`${this.path}/:petId`, authMiddleware, this.dewormingController.createDewormPet);
  }
}

export default DewormingRoute;
