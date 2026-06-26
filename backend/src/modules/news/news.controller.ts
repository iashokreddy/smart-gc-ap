import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { NewsService } from './news.service';
import { CreateNewsArticleDto } from './dto/create-news-article.dto';

@ApiTags('News')
@Controller({ path: 'news', version: '1' })
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @Get()
  latest(@Query('limit') limit = 20) {
    return this.newsService.latest(+limit);
  }

  @Post()
  create(@Body() dto: CreateNewsArticleDto) {
    return this.newsService.create(dto);
  }
}
