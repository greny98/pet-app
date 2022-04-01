import UserModel from '@models/users.model';
import { hash } from 'bcrypt';
import { User } from '@interfaces/users.interface';

async function seedAdmin() {
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
    {
      username: 'user1',
      password,
      name: 'My User',
      phone: '012345678',
      admin: false,
      address: 'Hai Duong',
    },
  ];

  await UserModel.insertMany(users);
}

export default seedAdmin;
