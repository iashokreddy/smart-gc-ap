import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateGrievanceDto } from './dto/create-grievance.dto';
import { Grievance, GrievanceStatus } from './grievance.entity';

@Injectable()
export class GrievancesService {
  constructor(
    @InjectRepository(Grievance)
    private readonly repo: Repository<Grievance>,
  ) {}

  async list(status?: string) {
    return this.repo.find({
      where: status ? { status: status as GrievanceStatus } : {},
      order: { createdAt: 'DESC' },
    });
  }

  async create(input: CreateGrievanceDto) {
    const row = this.repo.create({
      ...input,
      category: input.category ?? 'general',
      status: GrievanceStatus.OPEN,
    });
    return this.repo.save(row);
  }

  async updateStatus(id: string, status: GrievanceStatus) {
    const row = await this.repo.findOne({ where: { id } });
    if (!row) throw new NotFoundException('Grievance not found');
    row.status = status;
    return this.repo.save(row);
  }
}
