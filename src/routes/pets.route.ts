import { Router } from 'express';
import { Routes } from '@interfaces/routes.interface';
import authMiddleware from '@middlewares/auth.middleware';
import PetController from '@controllers/pets.controller';
import validationMiddleware from '@middlewares/validation.middleware';
import { CreatePetDto } from '@dtos/pets.dto';

class PetRoute implements Routes {
  public path = '/pets';
  public router = Router();
  public petController = new PetController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, authMiddleware, this.petController.getPets);
    this.router.get(`${this.path}/:petId`, authMiddleware, this.petController.getDetail);
    this.router.post(`${this.path}`, authMiddleware, validationMiddleware(CreatePetDto, 'body'), this.petController.getPets);
  }
}

export default PetRoute;
