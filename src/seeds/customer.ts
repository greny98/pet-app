import customerModel from '@models/customers.model';
import { Customer } from '@interfaces/customers.interface';

async function seedCustomers() {
  await customerModel.deleteMany({});
  const customers: Customer[] = [
    { email: 'abcd@gmail.com', address: 'Minh Khai', name: 'Nguyen Van A', phone: '0123456532' },
    { email: 'defg@gmail.com', address: 'Hai Ba Trung', name: 'Nguyen Thi B', phone: '0123456535' },
    { email: 'jklm@gmail.com', address: 'Quang Trung', name: 'Nguyen Anh C', phone: '0123456533' },
  ];
  await customerModel.insertMany(customers);
}

export default seedCustomers;
