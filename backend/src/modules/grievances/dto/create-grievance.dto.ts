import { IsOptional, IsString, IsUrl, Matches, MaxLength } from 'class-validator';

export class CreateGrievanceDto {
  @IsString()
  @MaxLength(180)
  title!: string;

  @IsString()
  description!: string;

  @IsOptional()
  @IsString()
  @MaxLength(64)
  category?: string;

  @IsOptional()
  @IsString()
  @MaxLength(120)
  reporterName?: string;

  @IsOptional()
  @Matches(/^[6-9]\d{9}$/)
  reporterMobile?: string;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  location?: string;

  @IsOptional()
  @IsUrl({ require_tld: false })
  imageUrl?: string;
}
