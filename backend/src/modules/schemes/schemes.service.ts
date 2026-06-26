import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ILike, Repository } from 'typeorm';
import { Scheme } from './scheme.entity';
import { CreateSchemeDto } from './dto/create-scheme.dto';

@Injectable()
export class SchemesService {
  constructor(
    @InjectRepository(Scheme)
    private readonly repo: Repository<Scheme>,
  ) {}

  async findAll({ q, category, limit = 20, offset = 0 }: { q?: string; category?: string; limit?: number; offset?: number }) {
    const where = [
      ...(q ? [{ name: ILike(`%${q}%`) }, { category: ILike(`%${q}%`) }] : [{}]),
    ].map((clause) => ({ ...clause, ...(category ? { category } : {}) }));

    const [data, total] = await this.repo.findAndCount({
      where,
      take: limit,
      skip: offset,
      order: { updatedAt: 'DESC' },
    });

    return { data, total, limit, offset };
  }

  async create(dto: CreateSchemeDto) {
    const row = this.repo.create({
      ...dto,
      isVerified: dto.isVerified ?? false,
      publishedAt: dto.isVerified ? new Date() : undefined,
    });
    return this.repo.save(row);
  }
}
