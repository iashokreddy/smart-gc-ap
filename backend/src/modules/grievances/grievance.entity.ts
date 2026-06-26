import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, Index } from 'typeorm';

export enum GrievanceStatus {
  OPEN = 'open',
  IN_PROGRESS = 'in_progress',
  RESOLVED = 'resolved',
  CLOSED = 'closed',
}

@Entity('grievances')
export class Grievance {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Index()
  @Column({ length: 180 })
  title!: string;

  @Column({ type: 'text' })
  description!: string;

  @Column({ length: 64, default: 'general' })
  category!: string;

  @Column({ name: 'reporter_name', length: 120, nullable: true })
  reporterName?: string;

  @Column({ name: 'reporter_mobile', length: 15, nullable: true })
  reporterMobile?: string;

  @Column({ length: 255, nullable: true })
  location?: string;

  @Column({ name: 'image_url', length: 500, nullable: true })
  imageUrl?: string;

  @Column({ type: 'enum', enum: GrievanceStatus, default: GrievanceStatus.OPEN })
  status!: GrievanceStatus;

  @CreateDateColumn({ name: 'created_at' })
  createdAt!: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt!: Date;
}
