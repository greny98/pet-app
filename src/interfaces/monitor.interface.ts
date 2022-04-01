export enum EMonitorStatus {
  Progress,
  Complete,
}

export interface Monitor {
  _id: string;
  petId: string;
  type: string; //
  date: Date;
  task: string;
  note: string;
  status: EMonitorStatus;
}
