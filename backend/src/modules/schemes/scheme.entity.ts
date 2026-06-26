import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, Index } from 'typeorm';

@Entity('schemes')
export class Scheme {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Index()
  @Column({ length: 160 })
  name!: string;

  @Column({ name: 'name_te', length: 160, nullable: true })
  nameTe?: string;

  @Index()
  @Column({ length: 80 })
  category!: string;

  @Column({ type: 'text' })
  description!: string;

  @Column({ type: 'text', nullable: true })
  benefits?: string;

  @Column({ type: 'text', nullable: true })
  eligibility?: string;

  @Column({ name: 'source_name', length: 180, nullable: true })
  sourceName?: string;

  @Column({ name: 'source_url', length: 500, nullable: true })
  sourceUrl?: string;

  @Column({ name: 'is_verified', default: false })
  isVerified!: boolean;

  @Column({ name: 'published_at', type: 'timestamp', nullable: true })
  publishedAt?: Date;

  @CreateDateColumn({ name: 'created_at' })
  createdAt!: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt!: Date;
}
