import { model, Schema, Document, Types } from 'mongoose';
import { EPetSex, EPetSize, EPetType, Pet } from '@interfaces/pets.interface';

const petSchema: Schema = new Schema<Pet>({
  customer: {
    type: Types.ObjectId,
    required: true,
    ref: 'Customer',
  },
  name: {
    type: String,
    required: true,
  },
  type: {
    type: Number,
    enum: Object.values(EPetType),
  },
  breed: {
    type: String,
    required: true,
  },
  birthDate: Date,
  sex: {
    type: Number,
    enum: Object.values(EPetSex),
  },
  img: String,
  weight: {
    type: Number,
    default: 0,
  },
  size: {
    type: Number,
    required: true,
    enum: Object.values(EPetSize),
  },
});

const petModel = model<Pet & Document>('Pet', petSchema);

export default petModel;
