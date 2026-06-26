import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { BlogPost } from './blog-post.entity';

@Entity('blog_revisions')
export class BlogRevision {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ name: 'post_id' })
  postId!: string;

  @ManyToOne(() => BlogPost, (post) => post.revisions, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'post_id' })
  post!: BlogPost;

  @Column({ name: 'revision_number', type: 'int' })
  revisionNumber!: number;

  @Column({ name: 'content_snapshot', type: 'text' })
  contentSnapshot!: string;

  @Column({ type: 'text', nullable: true })
  summary?: string;

  @Column({ name: 'edited_by', length: 120 })
  editedBy!: string;

  @CreateDateColumn({ name: 'edited_at' })
  editedAt!: Date;
}
