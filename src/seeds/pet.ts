import petModel from '@models/pets.model';
import { EPetSex, EPetSize, EPetType, Pet } from '@interfaces/pets.interface';
import customerModel from '@models/customers.model';

async function seedPets() {
  await petModel.deleteMany({});
  const owners = await customerModel.find({});
  const pets: Pet[] = [
    { customer: owners[0], sex: EPetSex.M, type: EPetType.Dog, breed: 'Doggy', name: 'Nunu', size: EPetSize.S, birthDate: new Date(), weight: 3 },
    { customer: owners[1], sex: EPetSex.F, type: EPetType.Cat, breed: 'Mun', name: 'Dudu', size: EPetSize.M, birthDate: new Date(), weight: 4 },
    { customer: owners[2], sex: EPetSex.M, type: EPetType.Dog, breed: 'Corgi', name: 'Teddy', size: EPetSize.L, birthDate: new Date(), weight: 5 },
  ];
  await petModel.insertMany(pets);
}

export default seedPets;
