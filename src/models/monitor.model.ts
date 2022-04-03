import { model, Schema, Document, Types } from 'mongoose';
import { EMonitorStatus, Monitor } from '@interfaces/monitor.interface';
import petModel from '@models/pets.model';

const monitorSchema: Schema = new Schema<Monitor>({
  pet: {
    type: Types.ObjectId,
    ref: petModel,
    required: true,
  },
  date: Date,
  note: String,
  type: String,
  task: String,
  status: {
    type: String,
    enum: Object.values(EMonitorStatus),
  },
});

const monitorModel = model<Monitor & Document>('Monitor', monitorSchema);

export default monitorModel;
