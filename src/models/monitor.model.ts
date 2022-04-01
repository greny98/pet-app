import { model, Schema, Document, Types } from 'mongoose';
import { EMonitorStatus, Monitor } from '@interfaces/monitor.interface';

const monitorSchema: Schema = new Schema<Monitor>({
  petId: {
    type: String,
    required: true,
  },
  date: Date,
  note: String,
  type: String,
  task: String,
  status: {
    type: Number,
    enum: Object.values(EMonitorStatus),
  },
});

const monitorModel = model<Monitor & Document>('Monitor', monitorSchema);

export default monitorModel;
