import { model, Schema, Document } from 'mongoose';
import { EAgeUnitType, Immunization } from '@interfaces/immunization.interface';

const immunizationsSchema: Schema = new Schema<Immunization>({
  pet: {
    type: Schema.Types.ObjectId,
    ref: 'Pet',
  },
  vaccine: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  unit: {
    type: String,
    required: true,
    enum: Object.values(EAgeUnitType),
  },
  date: {
    type: Date,
    required: true,
    default: new Date(),
  },
});

const immunizationModel = model<Immunization & Document>('Immunization', immunizationsSchema);

export default immunizationModel;
