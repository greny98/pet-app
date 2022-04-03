import { model, Schema, Document, Types } from 'mongoose';
import { EMedicalStatus, MedicalHistory } from '@interfaces/medicalHistory.interface';
import userModel from '@models/users.model';
import petModel from '@models/pets.model';

const medicalHistorySchema: Schema = new Schema<MedicalHistory>({
  user: {
    type: Types.ObjectId,
    required: true,
    ref: userModel,
  },
  pet: {
    type: Types.ObjectId,
    required: true,
    ref: petModel,
  },
  date: { type: Date, default: new Date() },
  diagnosis: String,
  status: {
    type: String,
    enum: Object.values(EMedicalStatus),
  },
});

const medicalHistoryModel = model<MedicalHistory & Document>('MedicalHistory', medicalHistorySchema);

export default medicalHistoryModel;
