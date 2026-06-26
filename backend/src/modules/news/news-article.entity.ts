import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, Index } from 'typeorm';

@Entity('news_articles')
export class NewsArticle {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Index()
  @Column({ length: 200 })
  title!: string;

  @Column({ type: 'text' })
  excerpt!: string;

  @Column({ type: 'text', nullable: true })
  body?: string;

  @Column({ length: 64, default: 'District News' })
  category!: string;

  @Column({ length: 5, default: 'en' })
  language!: string;

  @Column({ name: 'source_name', length: 180 })
  sourceName!: string;

  @Column({ name: 'source_url', length: 500, nullable: true })
  sourceUrl?: string;

  @Column({ name: 'is_verified', default: true })
  isVerified!: boolean;

  @Column({ name: 'published_at', type: 'timestamp' })
  publishedAt!: Date;

  @CreateDateColumn({ name: 'created_at' })
  createdAt!: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt!: Date;
}
