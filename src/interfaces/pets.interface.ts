import { Customer } from '@interfaces/customers.interface';

export enum EPetType {
  Dog,
  Cat,
}

export enum EPetSex {
  M,
  F,
}

export enum EPetSize {
  S,
  M,
  L,
}

export interface Pet {
  _id?: string;
  customer: string | Customer;
  name: string;
  type: EPetType;
  breed: string;
  birthDate: Date;
  sex: EPetSex;
  img?: string;
  weight: number;
  size: EPetSize;
}
