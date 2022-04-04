import { Document, model, Schema } from 'mongoose';
import { EUserStatus, User } from '@interfaces/users.interface';

const userSchema: Schema = new Schema<User>({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
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
  admin: {
    type: Boolean,
    default: false,
  },
  status: {
    type: String,
    enum: Object.values(EUserStatus),
    default: EUserStatus.InActive,
  },
});

const userModel = model<User & Document>('User', userSchema);

export default userModel;
