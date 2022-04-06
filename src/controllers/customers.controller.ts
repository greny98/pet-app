import { NextFunction, Request, RequestHandler, Response } from 'express';
import { PaginationQuery } from '@interfaces/routes.interface';
import CustomerService from '@/services/customers.service';
import { Customer } from '@/interfaces/customers.interface';
import { RequestWithUser } from '@/interfaces/auth.interface';
import PetService from '@/services/pets.service';

interface GetDetailParams {
  customerId: string;
}

class CustomersController {
  public customerService = new CustomerService();
  public petService = new PetService();


  public getCustomers = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { page = 0 } = req.query as any as PaginationQuery;
      const customers: Customer[] = await this.customerService.getPagination(page);
      res.status(200).render('pages/customer/list', { customers });
    } catch (error) {
      next(error);
    }
  };

  public getCustomerForm = async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.status(200).render('pages/customer/create');
    } catch (error) {
      next(error);
    }
  };

  public getDetail = async (req: RequestWithUser, res: Response, next: NextFunction) => {
    try {
      const { customerId } = req.params as any as GetDetailParams;
      const customerInfo = await this.customerService.getById(customerId);
      const petsInfo = await this.petService.getByCustomerId(customerId);
      console.log('🚀 ~ file: customers.controller.ts ~ line 36 ~ CustomersController ~ getDetail= ~ customerInfo', petsInfo);
      res.status(200).render('pages/customer/detail');
    } catch (error) {
      next(error);
    }
  };

  public createCustomer = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const customerData = req.body;
      const createCustomerData: Customer = await this.customerService.createCustomer(customerData);

      res.status(201).json({ data: createCustomerData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };
}

export default CustomersController;
