import { IsEnum, IsOptional, IsString, MaxLength } from 'class-validator';
import { VolunteerStatus } from '../volunteer.entity';

export class UpdateVolunteerStatusDto {
  @IsEnum(VolunteerStatus)
  status!: VolunteerStatus;

  @IsOptional()
  @IsString()
  @MaxLength(120)
  assignedArea?: string;

  @IsOptional()
  @IsString()
  approvalNote?: string;
}
