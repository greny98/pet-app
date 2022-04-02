/**
 * TODO: Deworming model
 */
import { model, Schema, Document } from 'mongoose';
import { dewormings } from '@interfaces/dewormings.interface';

const dewormingSchema: Schema = new Schema<dewormings>({
  pet_id: {
    type: String,
    require: true,
  },
  date: {
    type: Date,
    require: true,
  },
});

const dewormingModel = model<dewormings & Document>('Deworming', dewormingSchema);
export default dewormingModel;
