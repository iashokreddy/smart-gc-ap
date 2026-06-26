import { Body, Controller, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { BlogService } from './blog.service';
import { CreateBlogDraftDto } from './dto/create-blog-draft.dto';
import { UpdateBlogDraftDto } from './dto/update-blog-draft.dto';
import { ReviewActionDto } from './dto/review-action.dto';

@ApiTags('Blog')
@Controller({ path: 'blog', version: '1' })
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  @Get()
  list(@Query('status') status?: string) {
    return this.blogService.list(status);
  }

  @Get(':id')
  getById(@Param('id') id: string) {
    return this.blogService.getById(id);
  }

  @Get(':id/revisions')
  revisions(@Param('id') id: string) {
    return this.blogService.getRevisions(id);
  }

  @Post('drafts')
  createDraft(@Body() dto: CreateBlogDraftDto) {
    return this.blogService.createDraft(dto);
  }

  @Patch(':id/draft')
  updateDraft(@Param('id') id: string, @Body() dto: UpdateBlogDraftDto) {
    return this.blogService.updateDraft(id, dto);
  }

  @Post(':id/submit-review')
  submitForReview(@Param('id') id: string, @Body() dto: ReviewActionDto) {
    return this.blogService.submitForReview(id, dto.editorName);
  }

  @Post(':id/publish')
  publish(@Param('id') id: string, @Body() dto: ReviewActionDto) {
    return this.blogService.publish(id, dto.editorName);
  }
}
