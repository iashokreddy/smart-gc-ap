import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SearchController } from './search.controller';
import { SearchService } from './search.service';
import { Scheme } from '../schemes/scheme.entity';
import { BlogPost } from '../blog/blog-post.entity';
import { NewsArticle } from '../news/news-article.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Scheme, BlogPost, NewsArticle])],
  controllers: [SearchController],
  providers: [SearchService],
})
export class SearchModule {}
