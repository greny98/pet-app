import { Pet } from '@interfaces/pets.interface';

export interface Dewormings {
  pet: string | Pet;
  date: Date;
}
