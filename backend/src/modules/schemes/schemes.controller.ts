import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { SchemesService } from './schemes.service';
import { CreateSchemeDto } from './dto/create-scheme.dto';

@ApiTags('Schemes')
@Controller({ path: 'schemes', version: '1' })
export class SchemesController {
  constructor(private readonly schemesService: SchemesService) {}

  @Get()
  findAll(
    @Query('q') q?: string,
    @Query('category') category?: string,
    @Query('limit') limit = 20,
    @Query('offset') offset = 0,
  ) {
    return this.schemesService.findAll({ q, category, limit: +limit, offset: +offset });
  }

  @Post()
  create(@Body() dto: CreateSchemeDto) {
    return this.schemesService.create(dto);
  }
}
