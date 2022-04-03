import { model, Schema, Document } from 'mongoose';
import { Dewormings } from '@interfaces/dewormings.interface';

const dewormingSchema: Schema = new Schema<Dewormings>({
  pet: {
    type: String,
    ref: 'Pet',
  },
  date: {
    type: Date,
    require: true,
    default: new Date(),
  },
});

const dewormingModel = model<Dewormings & Document>('Deworming', dewormingSchema);
export default dewormingModel;
