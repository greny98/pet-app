import { User } from '@interfaces/users.interface';
import { Pet } from '@interfaces/pets.interface';

export enum EMedicalStatus {
  Progress,
  Complete,
}

export interface MedicalHistory {
  _id: string;
  user: string | User;
  pet: string | Pet;
  date: Date;
  diagnosis: string;
  status: EMedicalStatus;
}
