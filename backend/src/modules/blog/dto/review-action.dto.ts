import { IsString, MaxLength } from 'class-validator';

export class ReviewActionDto {
  @IsString()
  @MaxLength(120)
  editorName!: string;
}
