import { Body, Controller, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { GrievancesService } from './grievances.service';
import { CreateGrievanceDto } from './dto/create-grievance.dto';
import { UpdateGrievanceStatusDto } from './dto/update-grievance-status.dto';

@ApiTags('Grievances')
@Controller({ path: 'grievances', version: '1' })
export class GrievancesController {
  constructor(private readonly grievancesService: GrievancesService) {}

  @Get()
  list(@Query('status') status?: string) {
    return this.grievancesService.list(status);
  }

  @Post()
  create(@Body() dto: CreateGrievanceDto) {
    return this.grievancesService.create(dto);
  }

  @Patch(':id/status')
  updateStatus(@Param('id') id: string, @Body() dto: UpdateGrievanceStatusDto) {
    return this.grievancesService.updateStatus(id, dto.status);
  }
}
