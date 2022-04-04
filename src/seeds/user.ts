import UserModel from '@models/users.model';
import { hash } from 'bcrypt';
import { EUserStatus, User } from '@interfaces/users.interface';
import { randomNumber, randomPhone, randomText } from '@utils/randoms';

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
      status: EUserStatus.Active,
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
      status: randomNumber(0, 2) == 1 ? EUserStatus.Active : EUserStatus.InActive,
    });
  }
  await UserModel.insertMany(users);
}

export default seedUsers;
