import { IsString, IsNumber, IsEnum, IsDate } from 'class-validator';
import { EAgeUnitType } from '@interfaces/immunization.interface';

export class createImmunizationDto {
  @IsString()
  public pet: string;

  @IsString()
  public vaccine: string;

  @IsNumber()
  public age: number;

  @IsEnum(EAgeUnitType)
  public unit: EAgeUnitType;

  @IsDate()
  public date: Date;
}
