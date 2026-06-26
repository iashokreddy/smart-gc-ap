import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlogController } from './blog.controller';
import { BlogService } from './blog.service';
import { BlogPost } from './blog-post.entity';
import { BlogRevision } from './blog-revision.entity';

@Module({
	imports: [TypeOrmModule.forFeature([BlogPost, BlogRevision])],
	controllers: [BlogController],
	providers: [BlogService],
	exports: [BlogService],
})
export class BlogModule {}
