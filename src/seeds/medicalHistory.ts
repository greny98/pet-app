/**
 * TODO: Seed medical history
 */
import petModel from '@models/pets.model';
import userModel from '@models/users.model';
import { EMedicalStatus, MedicalHistory } from '@interfaces/medicalHistory.interface';
import moment from 'moment';
import { randomNumber } from '@utils/randoms';
import medicalHistoryModel from '@models/medicalHistory.model';

const randomDate = () => {
  const m = randomNumber(1, 12);
  const d = randomNumber(1, 28);
  const y = randomNumber(2021, 2023);
  return moment(`${y}-${m}-${d}`, 'YYYY-MM-DD').toDate();
};

async function seedMedicalHistories() {
  // Remove all
  medicalHistoryModel.deleteMany({});
  // Get all user and pet
  const [pets, users] = await Promise.all([petModel.find({}), userModel.find({ admin: false })]);
  const histories: MedicalHistory[] = [];
  const diagnoses = ['Sexually mature earlier', 'Soiled vent feathers', 'Digestive'];
  for (let i = 0; i < 100; i++) {
    // Random user
    const iUser = randomNumber(0, users.length);
    // Random pet
    const iPet = randomNumber(0, pets.length);
    // Random date
    const date = randomDate();
    histories.push({
      user: users[iUser]._id,
      date,
      pet: pets[iPet]._id,
      status: EMedicalStatus.Progress,
      diagnosis: diagnoses[randomNumber(0, diagnoses.length)],
    });
  }
  await medicalHistoryModel.insertMany(histories);
}

export default seedMedicalHistories;
