import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class Login {

  @IsEmail()
  public email: string;

  @IsNotEmpty()
  @IsString()
  public password: string; 
}
