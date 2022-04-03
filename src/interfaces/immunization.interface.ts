import { Pet } from '@interfaces/pets.interface';

export enum EAgeUnitType {
  W = 'W',
  M = 'M',
  Y = 'Y',
}
export interface Immunization {
  pet: string | Pet;
  vaccine: string;
  age: number;
  unit: EAgeUnitType;
  date: Date;
}
