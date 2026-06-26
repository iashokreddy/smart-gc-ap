import { IsBoolean, IsDateString, IsOptional, IsString, IsUrl, MaxLength } from 'class-validator';

export class CreateNewsArticleDto {
  @IsString()
  @MaxLength(200)
  title!: string;

  @IsString()
  excerpt!: string;

  @IsOptional()
  @IsString()
  body?: string;

  @IsOptional()
  @IsString()
  @MaxLength(64)
  category?: string;

  @IsOptional()
  @IsString()
  @MaxLength(5)
  language?: string;

  @IsString()
  @MaxLength(180)
  sourceName!: string;

  @IsOptional()
  @IsUrl({ require_tld: false })
  sourceUrl?: string;

  @IsOptional()
  @IsBoolean()
  isVerified?: boolean;

  @IsDateString()
  publishedAt!: string;
}
