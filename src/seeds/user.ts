import UserModel from '@models/users.model';
import { hash } from 'bcrypt';
import { User } from '@interfaces/users.interface';
import { randomPhone, randomText } from '@utils/randoms';

async function seedUsers() {
  await UserModel.deleteMany({});
  const password = await hash('1234', 10);

  const users: User[] = [
    {
      username: 'admin',
      password,
      name: 'Admin',
      phone: '012345678',
      admin: true,
      address: 'Hanoi',
    },
  ];
  for (let i = 0; i < 20; i++) {
    users.push({
      username: `user${i}`,
      password,
      name: `${randomText()} ${randomText()}`,
      phone: randomPhone(),
      admin: false,
      address: 'Ha Noi',
    });
  }
  await UserModel.insertMany(users);
}

export default seedUsers;
