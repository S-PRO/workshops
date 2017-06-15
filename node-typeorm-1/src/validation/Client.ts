import {
  IsEmail,
  IsNotEmpty,
  MinLength,
  IsString,
  ValidateIf,
  IsNumber,
  Min
} from 'class-validator';

export class Client {

  @IsNumber()
  @ValidateIf(v => !!v.id)
  public id: number;

  @IsNotEmpty()
  @IsString()
  @IsEmail()
  public email: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  public password: string;

  @ValidateIf(v => !!v.first_name)
  @IsString()
  @MinLength(2)
  public first_name: string;

  @ValidateIf(v => !!v.last_name)
  @IsString()
  @MinLength(2)
  public last_name: string;

}
