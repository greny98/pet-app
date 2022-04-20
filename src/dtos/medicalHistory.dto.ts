import { IsDate, IsEnum } from 'class-validator';
import { EMedicalStatus } from '@interfaces/medicalHistory.interface';

export class MedicalHistoryDto {
  @IsDate()
  public date: Date;

  @IsEnum(EMedicalStatus)
  public status: EMedicalStatus;
}
