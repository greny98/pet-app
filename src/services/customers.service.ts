import customerModel from '@models/customers.model';
import { Customer } from '@interfaces/customers.interface';
import { HttpException } from '@exceptions/HttpException';
import { isEmpty } from '@utils/util';
import { CreatCustomerDto } from '@dtos/customers.dto';

class CustomerService {
  public customerModel = customerModel;

  public async getPagination(page: number, limit = 10): Promise<Customer[]> {
    if (page < 0) page = 0;
    const skip = page * limit;
    return this.customerModel.find({}, null, { limit, skip }).exec();
  }

  public async getById(customerId: string): Promise<Customer> {
    if (isEmpty(customerId)) throw new HttpException(400, "You're not customerId");
    const findCustomer: Customer = await this.customerModel.findOne({ _id: customerId });
    if (!findCustomer) throw new HttpException(409, "You're not customer");
    return findCustomer;
  }

  public async createCustomer(customerData: CreatCustomerDto): Promise<Customer> {
    if (!isEmpty(customerData)) throw new HttpException(400, "You're not customerData");

    return await this.customerModel.create({ ...customerData });
  }

  public async updateCustomer(customerId: string, customerData: CreatCustomerDto): Promise<Customer> {
    if (isEmpty(customerData)) throw new HttpException(400, "You're not customerData");

    const updateCustomerById: Customer = await this.customerModel.findByIdAndUpdate(customerId, { customerData });
    if (!updateCustomerById) throw new HttpException(409, "You're not customer");

    return updateCustomerById;
  }
}

export default CustomerService;
