import { Pet } from '@interfaces/pets.interface';

export enum EMonitorStatus {
  Progress = 'Progress',
  Complete = 'Complete',
}

export interface Monitor {
  _id: string;
  pet: string | Pet;
  type: string; //
  date: Date;
  task: string;
  note: string;
  status: EMonitorStatus;
}
