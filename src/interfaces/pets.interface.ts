import { Customer } from '@interfaces/customers.interface';
import { User } from '@interfaces/users.interface';

export enum EPetType {
  Dog = 'Dog',
  Cat = 'Cat',
}

export enum EPetSex {
  M = 'M',
  F = 'F',
}

export enum EPetSize {
  S = 'S',
  M = 'M',
  L = 'L',
}

export enum EPetStatus {
  Active = 'Active',
  InActive = 'InActive',
}

export interface Pet {
  _id?: string;
  customer: string | Customer;
  user: string | User;
  name: string;
  type: EPetType;
  breed: string;
  birthDate: Date;
  sex: EPetSex;
  img?: string;
  weight: number;
  size: EPetSize;
  status: EPetStatus;
}
