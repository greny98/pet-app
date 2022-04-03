import 'dotenv/config';
import '@/index';
import config from 'config';
import { dbConfig } from '@interfaces/db.interface';
import mongoose from 'mongoose';

(async function run() {
  try {
    const { host, port, database }: dbConfig = config.get('dbConfig');
    await mongoose.connect(`mongodb://${host}:${port}/${database}`);
    console.log('MongoDB Connected!');
    // =================== Test service ===================

    // ====================================================
    await mongoose.connection.close();
    console.log('DONE');
  } catch (e) {
    await mongoose.connection.close();
    console.log(e);
  }
})();
