import { IsString, Matches, MaxLength } from 'class-validator';

export class RegisterVolunteerDto {
  @IsString()
  @MaxLength(120)
  name!: string;

  @Matches(/^[6-9]\d{9}$/)
  mobile!: string;

  @IsString()
  @MaxLength(120)
  area!: string;
}
