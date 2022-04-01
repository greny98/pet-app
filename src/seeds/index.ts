/**
 * TODO: Seed
 */
import 'dotenv/config';
import '@/index';
import config from 'config';
import { dbConfig } from '@interfaces/db.interface';
import mongoose from 'mongoose';
import seedUsers from '@seeds/user';
import seedCustomers from '@seeds/customer';
import seedPets from '@seeds/pet';

const { host, port, database }: dbConfig = config.get('dbConfig');
(async function seeds() {
  try {
    await mongoose.connect(`mongodb://${host}:${port}/${database}`);
    console.log('MongoDB Connected!');
    await seedUsers();
    await seedCustomers();
    await seedPets();
    await mongoose.connection.close();
    console.log('DONE');
  } catch (e) {
    await mongoose.connection.close();
    console.log(e);
  }
})();
