import { model, Schema, Document, Types } from 'mongoose';
import { EServiceStatus, Service } from '@interfaces/services.interface';

const serviceSchema: Schema = new Schema<Service>({
  medical: {
    type: Types.ObjectId,
    required: true,
    ref: 'MedicalHistory',
  },
  type: { type: String, required: true },
  test: { type: String, required: true },
  status: {
    type: String,
    enum: Object.values(EServiceStatus),
  },
  createdAt: Date,
});

const serviceModel = model<Service & Document>('Service', serviceSchema);
export default serviceModel;
