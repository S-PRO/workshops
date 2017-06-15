import {
  IsNotEmpty,
  IsString
} from 'class-validator';

export class AlbumValidator {

  @IsNotEmpty()
  @IsString()
  public title: string;

  @IsNotEmpty()
  @IsString()
  public description: string;

}
