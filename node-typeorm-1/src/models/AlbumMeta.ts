import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn
} from 'typeorm';
import { Album } from "./Album";

@Entity()
export class AlbumMeta {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    image: string;

    @OneToOne(type => Album, album => album.meta)
    @JoinColumn()
    album: Album;

}
