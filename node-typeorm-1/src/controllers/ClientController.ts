import {
  JsonController,
  Body,
  Post,
  Get,
  Authorized,
  HttpCode,
  Param,
  HeaderParam
} from 'routing-controllers';
import * as Boom from 'boom';

import { ClientStore } from './../utils';
import { Client } from './../validation';

@JsonController('/client')
export class ClientController {

  @Post('/')
  @HttpCode(204)
  create( @Body() client: Client) {
    ClientStore.create(client);
  }

  @Get('/')
  @Authorized()
  fetchAll() {
    return ClientStore.fetchAll();
  }

  @Get('/:id')
  @Authorized()
  fetch( @Param('id') id: number) {
    const client = ClientStore.fetch(id);
    if (!client) throw Boom.notFound();
    return client;
  }
}
