import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { EmploymentService } from './employment.service';

@ApiTags('Employment')
@Controller({ path: 'employment', version: '1' })
export class EmploymentController {
  constructor(private readonly employmentService: EmploymentService) {}

  @Get('jobs')
  jobs() {
    return this.employmentService.jobs();
  }
}
