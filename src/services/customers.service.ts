import customerModel from '@models/customers.model';
import { Customer } from '@interfaces/customers.interface';

class CustomerService {
  public customerModel = customerModel;

  /**
   * TODO: Pagination
   */
  public async getPagination(page: number, limit = 10) {
    // Code here
  }

  /**
   * TODO: Get by pet id
   */
  public async getById(customerId: string) {
    // Code here
  }

  /**
   * TODO: Create customer info
   */
  public async create(info: Customer) {
    // Code here
  }

  /**
   * TODO: Update customer info
   */
  public async update(info: Customer) {
    // Code here
  }
}
