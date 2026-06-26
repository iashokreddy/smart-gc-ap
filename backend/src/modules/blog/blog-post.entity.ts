import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany, Index } from 'typeorm';
import { BlogRevision } from './blog-revision.entity';

export enum BlogStatus {
  DRAFT = 'draft',
  IN_REVIEW = 'in_review',
  PUBLISHED = 'published',
  REJECTED = 'rejected',
}

@Entity('blog_posts')
export class BlogPost {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Index({ unique: true })
  @Column({ length: 180 })
  slug!: string;

  @Column({ length: 200 })
  title!: string;

  @Column({ type: 'text', nullable: true })
  summary?: string;

  @Column({ type: 'text' })
  content!: string;

  @Column({ length: 64, default: 'Development' })
  category!: string;

  @Column({ length: 5, default: 'en' })
  language!: string;

  @Column({ type: 'enum', enum: BlogStatus, default: BlogStatus.DRAFT })
  status!: BlogStatus;

  @Column({ name: 'source_name', length: 180, nullable: true })
  sourceName?: string;

  @Column({ name: 'source_url', length: 500, nullable: true })
  sourceUrl?: string;

  @Column({ name: 'is_verified_fact', default: false })
  isVerifiedFact!: boolean;

  @Column({ name: 'is_opinion', default: false })
  isOpinion!: boolean;

  @Column({ name: 'author_name', length: 120 })
  authorName!: string;

  @Column({ name: 'editor_name', length: 120, nullable: true })
  editorName?: string;

  @Column({ name: 'revision_number', type: 'int', default: 1 })
  revisionNumber!: number;

  @Column({ name: 'published_at', type: 'timestamp', nullable: true })
  publishedAt?: Date;

  @CreateDateColumn({ name: 'created_at' })
  createdAt!: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt!: Date;

  @OneToMany(() => BlogRevision, (revision) => revision.post, { cascade: true })
  revisions!: BlogRevision[];
}
