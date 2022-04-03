import { model, Schema, Document, Types } from 'mongoose';
import { EMedicalStatus, MedicalHistory } from '@interfaces/medicalHistory.interface';

const medicalHistorySchema: Schema = new Schema<MedicalHistory>({
  user: {
    type: Types.ObjectId,
    required: true,
    ref: 'User',
  },
  pet: {
    type: Types.ObjectId,
    required: true,
    ref: 'Pet',
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
