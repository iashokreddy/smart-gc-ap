import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RegisterVolunteerDto } from './dto/register-volunteer.dto';
import { UpdateVolunteerStatusDto } from './dto/update-volunteer-status.dto';
import { Volunteer, VolunteerStatus } from './volunteer.entity';

@Injectable()
export class VolunteersService {
  constructor(
    @InjectRepository(Volunteer)
    private readonly repo: Repository<Volunteer>,
  ) {}

  async list(status?: string) {
    return this.repo.find({
      where: status ? { status: status as VolunteerStatus } : {},
      order: { createdAt: 'DESC' },
    });
  }

  async register(input: RegisterVolunteerDto) {
    const row = this.repo.create({ ...input, status: VolunteerStatus.PENDING });
    return this.repo.save(row);
  }

  async updateStatus(id: string, input: UpdateVolunteerStatusDto) {
    const row = await this.repo.findOne({ where: { id } });
    if (!row) throw new NotFoundException('Volunteer not found');

    row.status = input.status;
    row.assignedArea = input.assignedArea ?? row.assignedArea;
    row.approvalNote = input.approvalNote ?? row.approvalNote;
    return this.repo.save(row);
  }
}
