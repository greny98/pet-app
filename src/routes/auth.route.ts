import { Router } from 'express';
import AuthController from '@controllers/auth.controller';
import { LoginDto } from '@dtos/users.dto';
import { Routes } from '@interfaces/routes.interface';
import authMiddleware from '@middlewares/auth.middleware';
import validationMiddleware from '@middlewares/validation.middleware';

class AuthRoute implements Routes {
  public path = '/';
  public router = Router();
  public authController = new AuthController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}login`, authMiddleware, this.authController.renderLogin);
    this.router.post(`${this.path}login`, validationMiddleware(LoginDto, 'body'), this.authController.logIn);

    this.router.get(`${this.path}register`, authMiddleware, this.authController.renderRegister);
    this.router.post(`${this.path}register`, validationMiddleware(LoginDto, 'body'), this.authController.register);

    this.router.get(`${this.path}logout`, authMiddleware, this.authController.logOut);
  }
}

export default AuthRoute;
