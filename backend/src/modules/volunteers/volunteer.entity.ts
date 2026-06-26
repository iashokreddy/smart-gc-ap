import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, Index } from 'typeorm';

export enum VolunteerStatus {
  PENDING = 'pending',
  APPROVED = 'approved',
  REJECTED = 'rejected',
}

@Entity('volunteers')
export class Volunteer {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ length: 120 })
  name!: string;

  @Index()
  @Column({ length: 15 })
  mobile!: string;

  @Column({ length: 120 })
  area!: string;

  @Column({ name: 'assigned_area', length: 120, nullable: true })
  assignedArea?: string;

  @Column({ name: 'approval_note', type: 'text', nullable: true })
  approvalNote?: string;

  @Column({ type: 'enum', enum: VolunteerStatus, default: VolunteerStatus.PENDING })
  status!: VolunteerStatus;

  @CreateDateColumn({ name: 'created_at' })
  createdAt!: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt!: Date;
}
