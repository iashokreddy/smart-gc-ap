import { IsBoolean, IsOptional, IsString, IsUrl, MaxLength } from 'class-validator';

export class CreateBlogDraftDto {
  @IsString()
  @MaxLength(180)
  slug!: string;

  @IsString()
  @MaxLength(200)
  title!: string;

  @IsOptional()
  @IsString()
  summary?: string;

  @IsString()
  content!: string;

  @IsOptional()
  @IsString()
  @MaxLength(64)
  category?: string;

  @IsOptional()
  @IsString()
  @MaxLength(5)
  language?: string;

  @IsString()
  @MaxLength(120)
  authorName!: string;

  @IsOptional()
  @IsString()
  @MaxLength(180)
  sourceName?: string;

  @IsOptional()
  @IsUrl({ require_tld: false })
  sourceUrl?: string;

  @IsOptional()
  @IsBoolean()
  isVerifiedFact?: boolean;

  @IsOptional()
  @IsBoolean()
  isOpinion?: boolean;
}
