import { IsEnum } from 'class-validator';
import { GrievanceStatus } from '../grievance.entity';

export class UpdateGrievanceStatusDto {
  @IsEnum(GrievanceStatus)
  status!: GrievanceStatus;
}
