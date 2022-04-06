import { IsDate, IsEnum, IsNumber, IsString } from 'class-validator';
import { EPetSex, EPetSize, EPetStatus, EPetType } from '@interfaces/pets.interface';

/**
 * TODO: Pet Dto
 */
export class CreatePetDto {
  @IsString()
  public name: string;

  @IsEnum(EPetType)
  public type: EPetType;

  @IsString()
  public breed: string;

  @IsEnum(EPetSex)
  public sex: EPetSex;

  @IsDate()
  public birthDate: Date;

  @IsEnum(EPetSize)
  public size: EPetSize;

  @IsNumber()
  public weight: number;

  @IsEnum(EPetStatus)
  public status: EPetStatus;
}
