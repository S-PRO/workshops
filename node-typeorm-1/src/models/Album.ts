import {
  Entity,
  Column,
  JoinColumn,
  PrimaryGeneratedColumn,
  OneToMany,
} from 'typeorm';

@Entity()
export class Album <Entity> {

  constructor(title: string) {
    this.title = title;
    this.updated_at = new Date();
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  updated_at: Date;
}
