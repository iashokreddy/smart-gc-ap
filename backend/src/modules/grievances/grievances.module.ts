import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GrievancesController } from './grievances.controller';
import { GrievancesService } from './grievances.service';
import { Grievance } from './grievance.entity';

@Module({
	imports: [TypeOrmModule.forFeature([Grievance])],
	controllers: [GrievancesController],
	providers: [GrievancesService],
	exports: [GrievancesService],
})
export class GrievancesModule {}
