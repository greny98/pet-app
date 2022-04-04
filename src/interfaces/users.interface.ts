export enum EUserStatus {
  Active = 'Active',
  InActive = 'InActive',
}

export interface User {
  _id?: string;
  username: string;
  password: string;
  name: string;
  phone: string;
  address: string;
  admin: boolean;
  status: EUserStatus;
}
