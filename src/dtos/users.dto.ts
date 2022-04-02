import { IsPhoneNumber, IsString } from 'class-validator';

export class LoginDto {
  @IsString()
  public username: string;

  @IsString()
  public password: string;
}

/**
 * TODO: CreateUserDto
 */
export class CreateUserDto extends LoginDto {
  @IsString()
  public name: string;

  @IsPhoneNumber()
  public phone: string;

  @IsString()
  public address: string;
}
