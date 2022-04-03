import customerModel from '@models/customers.model';
import { Customer } from '@interfaces/customers.interface';
import { randomPhone, randomText } from '@utils/randoms';

async function seedCustomers() {
  await customerModel.deleteMany({});
  const customers: Customer[] = [];
  for (let i = 0; i < 50; i++) {
    const name = randomText();
    customers.push({
      email: `${name.toLowerCase()}${i}@gmail.com`,
      address: 'Long Bien, Hanoi',
      name: `${randomText()} ${name}`,
      phone: randomPhone(),
    });
  }
  await customerModel.insertMany(customers);
}

export default seedCustomers;
