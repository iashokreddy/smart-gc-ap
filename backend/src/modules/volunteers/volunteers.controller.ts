import { Body, Controller, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { VolunteersService } from './volunteers.service';
import { RegisterVolunteerDto } from './dto/register-volunteer.dto';
import { UpdateVolunteerStatusDto } from './dto/update-volunteer-status.dto';

@ApiTags('Volunteers')
@Controller({ path: 'volunteers', version: '1' })
export class VolunteersController {
  constructor(private readonly volunteersService: VolunteersService) {}

  @Get()
  list(@Query('status') status?: string) {
    return this.volunteersService.list(status);
  }

  @Post('register')
  register(@Body() dto: RegisterVolunteerDto) {
    return this.volunteersService.register(dto);
  }

  @Patch(':id/status')
  updateStatus(@Param('id') id: string, @Body() dto: UpdateVolunteerStatusDto) {
    return this.volunteersService.updateStatus(id, dto);
  }
}
