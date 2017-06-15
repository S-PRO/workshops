import { JsonController, HttpCode, Get, Post, Patch, Body, Param } from 'routing-controllers';
import * as Boom from 'boom';

import { Connection, Entity, getConnectionManager } from "typeorm";
import { Album, AlbumMeta } from "../models";
import { AlbumValidator } from "../validation";


@JsonController('/album')
export class AlbumController {

  private connection: Connection;

  constructor(title: string) {
    this.connection = getConnectionManager().get();
    console.log(this.connection);
  }

  @Get('/')
  @HttpCode(200)
  fetchAll() {
    return this.connection.entityManager.find(Album);
  }

  @Post('/')
  create(@Body() album_validated: AlbumValidator) {
    let { title, description } = album_validated;
    let album = new Album(title, description);
    return this.connection.entityManager
      .persist(album);
  }

  @Get('/:id')
  fetch( @Param('id') id: number) {
    return this.connection.getRepository(Album).findOneById(1);
  }

  @Post('/:id')
  async update( @Param('id') id: number) {
    let albumToUpdate = await this.connection.getRepository(Album).findOneById(1);
    if (albumToUpdate) {
        albumToUpdate.title = "Dark Side Of The Moon";
        return this.connection.entityManager.persist(albumToUpdate);
    }
  }

  @Get('/savemeta')
  @HttpCode(200)
  async savemeta() {
    
    let album = new Album("Show Must Go On", "Queen");

    let albumMeta = new AlbumMeta();
    albumMeta.image = "show.jpg";
    albumMeta.album = album;

    let albumRepository = this.connection.getRepository(Album);
    let metaRepository = this.connection.getRepository(AlbumMeta);

    await albumRepository.persist(album);
    await metaRepository.persist(albumMeta);
  }

  @Get('/getmeta')
  @HttpCode(200)
  getmeta() {
    let albumRepository = this.connection.getRepository(Album);
    return albumRepository.createQueryBuilder("album")
        .innerJoinAndSelect("album.meta","meta")
        .getMany();
  }

}
