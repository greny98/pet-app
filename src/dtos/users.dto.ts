import { IsString } from 'class-validator';

export class LoginDto {
  @IsString()
  public username: string;

  @IsString()
  public password: string;
}

/**
 * TODO: CreateUserDto
 */
export class CreateUserDto {
  @IsString()
  public username: string;

  @IsString()
  public password: string;
}
