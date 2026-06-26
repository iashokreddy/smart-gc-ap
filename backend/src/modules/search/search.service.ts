import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, ILike } from 'typeorm';
import { Scheme } from '../schemes/scheme.entity';
import { BlogPost, BlogStatus } from '../blog/blog-post.entity';
import { NewsArticle } from '../news/news-article.entity';

@Injectable()
export class SearchService {
  constructor(
    @InjectRepository(Scheme) private readonly schemesRepo: Repository<Scheme>,
    @InjectRepository(BlogPost) private readonly blogRepo: Repository<BlogPost>,
    @InjectRepository(NewsArticle) private readonly newsRepo: Repository<NewsArticle>,
  ) {}

  async globalSearch(query: string, limit = 10) {
    const q = query?.trim();
    if (!q) return { schemes: [], blog: [], news: [] };

    const [schemes, blog, news] = await Promise.all([
      this.schemesRepo.find({ where: [{ name: ILike(`%${q}%`) }, { category: ILike(`%${q}%`) }], take: limit }),
      this.blogRepo.find({ where: [{ title: ILike(`%${q}%`), status: BlogStatus.PUBLISHED }], take: limit, order: { publishedAt: 'DESC' } }),
      this.newsRepo.find({ where: [{ title: ILike(`%${q}%`) }, { category: ILike(`%${q}%`) }], take: limit, order: { publishedAt: 'DESC' } }),
    ]);

    return { schemes, blog, news };
  }
}
