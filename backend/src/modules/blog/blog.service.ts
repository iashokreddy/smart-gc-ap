import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BlogPost, BlogStatus } from './blog-post.entity';
import { BlogRevision } from './blog-revision.entity';
import { CreateBlogDraftDto } from './dto/create-blog-draft.dto';
import { UpdateBlogDraftDto } from './dto/update-blog-draft.dto';

@Injectable()
export class BlogService {
  constructor(
    @InjectRepository(BlogPost)
    private readonly blogRepo: Repository<BlogPost>,
    @InjectRepository(BlogRevision)
    private readonly revisionRepo: Repository<BlogRevision>,
  ) {}

  async list(status?: string) {
    const where = status ? { status: status as BlogStatus } : {};
    return this.blogRepo.find({ where, order: { updatedAt: 'DESC' } });
  }

  async getById(id: string) {
    const row = await this.blogRepo.findOne({ where: { id } });
    if (!row) throw new NotFoundException('Blog post not found');
    return row;
  }

  async getRevisions(id: string) {
    await this.ensurePostExists(id);
    return this.revisionRepo.find({ where: { postId: id }, order: { revisionNumber: 'DESC' } });
  }

  async createDraft(dto: CreateBlogDraftDto) {
    const row = this.blogRepo.create({
      ...dto,
      category: dto.category ?? 'Development',
      language: dto.language ?? 'en',
      status: BlogStatus.DRAFT,
      isVerifiedFact: dto.isVerifiedFact ?? false,
      isOpinion: dto.isOpinion ?? false,
      revisionNumber: 1,
    });
    const saved = await this.blogRepo.save(row);

    await this.revisionRepo.save(
      this.revisionRepo.create({
        postId: saved.id,
        revisionNumber: 1,
        contentSnapshot: saved.content,
        summary: saved.summary,
        editedBy: saved.authorName,
      }),
    );

    return saved;
  }

  async updateDraft(id: string, dto: UpdateBlogDraftDto) {
    const row = await this.getById(id);
    if (row.status === BlogStatus.PUBLISHED) {
      throw new BadRequestException('Published post cannot be edited as draft');
    }

    Object.assign(row, {
      ...dto,
      revisionNumber: row.revisionNumber + 1,
      status: BlogStatus.DRAFT,
    });

    const saved = await this.blogRepo.save(row);
    await this.revisionRepo.save(
      this.revisionRepo.create({
        postId: saved.id,
        revisionNumber: saved.revisionNumber,
        contentSnapshot: saved.content,
        summary: saved.summary,
        editedBy: dto.editedBy,
      }),
    );
    return saved;
  }

  async submitForReview(id: string, editorName: string) {
    const row = await this.getById(id);
    if (row.status === BlogStatus.PUBLISHED) {
      throw new BadRequestException('Post already published');
    }
    row.status = BlogStatus.IN_REVIEW;
    row.editorName = editorName;
    return this.blogRepo.save(row);
  }

  async publish(id: string, editorName: string) {
    const row = await this.getById(id);
    if (row.status !== BlogStatus.IN_REVIEW) {
      throw new BadRequestException('Only in-review posts can be published');
    }
    if (!row.isVerifiedFact && !row.isOpinion) {
      throw new BadRequestException('Post must be verified or explicitly marked as opinion before publishing');
    }

    row.status = BlogStatus.PUBLISHED;
    row.editorName = editorName;
    row.publishedAt = new Date();
    return this.blogRepo.save(row);
  }

  private async ensurePostExists(id: string) {
    const exists = await this.blogRepo.exist({ where: { id } });
    if (!exists) throw new NotFoundException('Blog post not found');
  }
}
