import { IsDate, IsString } from 'class-validator';

export class DewormingDto {
  @IsDate()
  public date: Date;

  @IsString()
  public pet: string;
}
