import { IsDate, IsString } from 'class-validator';

export class DewormingDto {
  @IsDate()
  public date: Date;
}
