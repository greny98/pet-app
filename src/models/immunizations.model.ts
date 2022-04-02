/**
 * TODO: Immunization model
 */
import { model, Schema, Document } from 'mongoose';
import { ImmunizationInterface } from '@interfaces/immunization.interface';

const immunizationsSchema: Schema = new Schema<ImmunizationInterface>({
  pet_id: {
    type: String,
    required: true,
  },
  vaccine: {
    type: Boolean,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  unit: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});

const immunizationModel = model<ImmunizationInterface & Document>('Immunization', immunizationsSchema);

export default immunizationModel;
