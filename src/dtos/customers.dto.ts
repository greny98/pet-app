/**
 * TODO: Customers Dto
 */
import { IsPhoneNumber, IsString, IsEmail } from 'class-validator';

export class CreateCustomerDto {
  @IsString()
  public name: string;

  @IsPhoneNumber()
  public phone: string;

  @IsString()
  public address: string;

  @IsEmail()
  public email: string;
}
