import { MedicalHistory } from '@interfaces/medicalHistory.interface';

export enum EServiceStatus {
  Progress,
  Complete,
}

export interface Service {
  _id?: string;
  medical: string | MedicalHistory;
  type: string;
  test: string;
  status: EServiceStatus;
  createdAt: Date;
}
