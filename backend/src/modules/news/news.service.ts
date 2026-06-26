import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NewsArticle } from './news-article.entity';
import { CreateNewsArticleDto } from './dto/create-news-article.dto';

@Injectable()
export class NewsService {
  constructor(
    @InjectRepository(NewsArticle)
    private readonly repo: Repository<NewsArticle>,
  ) {}

  async latest(limit = 20) {
    return this.repo.find({
      take: limit,
      order: { publishedAt: 'DESC' },
    });
  }

  async create(dto: CreateNewsArticleDto) {
    const row = this.repo.create({
      ...dto,
      category: dto.category ?? 'District News',
      language: dto.language ?? 'en',
      isVerified: dto.isVerified ?? true,
      publishedAt: new Date(dto.publishedAt),
    });
    return this.repo.save(row);
  }
}
