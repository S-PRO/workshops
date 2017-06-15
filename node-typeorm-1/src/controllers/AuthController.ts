import { JsonController, Body, Post, HttpCode, HeaderParam, Authorized } from 'routing-controllers';
import * as Boom from 'boom';

import { Login } from './../validation';
import { ClientStore } from './../utils';

@JsonController('/auth')
export class AuthController {

  @Post('/login')
  login( @Body() credetnials: Login) {
    const { email, password } = credetnials;
    const isExists = ClientStore.isExists(email, password);
    if (!isExists) throw Boom.notFound();
    return { token: 'some token' };
  }
}
