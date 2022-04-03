import { model, Schema, Document } from 'mongoose';
import { Customer } from '@interfaces/customers.interface';

const customerSchema: Schema = new Schema<Customer>({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  address: {
    type: String,
  },
  email: String,
});

const customerModel = model<Customer & Document>('Customer', customerSchema);

export default customerModel;
