/**
 * TODO: Customers Dto
 */
import { IsPhoneNumber, IsString } from 'class-validator';

export class CreatCustomerDto {
  @IsString()
  public name: string;

  @IsPhoneNumber()
  public phone: string;

  @IsString()
  public address: string;

  @IsString()
  public email: string;
}
