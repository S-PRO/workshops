import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn
} from 'typeorm';

import { AlbumMeta } from "./AlbumMeta";
import { AlbumValidator } from "../validation";

@Entity()
export class Album {

  constructor(title: string, description: string) {
    this.title = title;
    this.description = description;
    this.updated_at = new Date();
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column({length: 50})
  title: string;

  @Column()
  description: string;

  @Column()
  updated_at: Date;

  @OneToOne(type => AlbumMeta, meta => meta.album)
  meta: AlbumMeta;
}
