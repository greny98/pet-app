import petModel from '@models/pets.model';
import { EPetSex, EPetSize, EPetType, Pet } from '@interfaces/pets.interface';
import customerModel from '@models/customers.model';
import { randomNumber, randomText } from '@utils/randoms';
import userModel from '@models/users.model';

async function seedPets() {
  await petModel.deleteMany({});
  const owners = await customerModel.find({});
  const users = await userModel.find({ admin: false });
  const pets: Pet[] = [
    {
      customer: owners[0],
      user: users[0]._id,
      sex: EPetSex.M,
      type: EPetType.Dog,
      breed: 'Doggy',
      name: 'Nunu',
      size: EPetSize.S,
      birthDate: new Date(),
      weight: 3,
    },
    {
      customer: owners[1],
      user: users[4]._id,
      sex: EPetSex.F,
      type: EPetType.Cat,
      breed: 'Mun',
      name: 'Dudu',
      size: EPetSize.M,
      birthDate: new Date(),
      weight: 4,
    },
    {
      customer: owners[2],
      user: users[8]._id,
      sex: EPetSex.M,
      type: EPetType.Dog,
      breed: 'Corgi',
      name: 'Teddy',
      size: EPetSize.L,
      birthDate: new Date(),
      weight: 5,
    },
  ];
  for (let i = 0; i < 50; i++) {
    let numb = Math.floor(Math.random() * 10);
    const sex = numb % 2 == 0 ? EPetSex.M : EPetSex.F;

    numb = Math.floor(Math.random() * 10);
    const type = numb % 2 == 0 ? EPetType.Dog : EPetType.Cat;

    pets.push({
      customer: owners[i]._id,
      user: users[randomNumber(0, users.length)]._id,
      sex,
      type,
      breed: randomText(),
      name: randomText(),
      weight: randomNumber(1, 20),
      size: EPetSize.M,
      birthDate: new Date(),
    });
  }
  await petModel.insertMany(pets);
}

export default seedPets;
