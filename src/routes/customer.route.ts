import { Router } from 'express';
import { Routes } from '@interfaces/routes.interface';
import validationMiddleware from '@middlewares/validation.middleware';
import authMiddleware from '@middlewares/auth.middleware';
import CustomersController from '@/controllers/customers.controller';

class CustomersRoute implements Routes {
  public path = '/customers';
  public router = Router();
  public customerController = new CustomersController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, authMiddleware, this.customerController.getCustomers);
    this.router.get(`${this.path}/create`, authMiddleware, this.customerController.getCustomerForm);
    this.router.get(`${this.path}/:customerId`, authMiddleware, this.customerController.getDetail);
    this.router.post(`${this.path}`, authMiddleware, this.customerController.createCustomer);
  }
}

export default CustomersRoute;
