import Boom from 'boom';

import { createSchema, updateSchema } from './schemas';
import { validator, PasswordService } from './../../utils';
import db from './../../models';

export default class LoginController {

  static getUser(id) {
    return db.user.findOne({ where: { id }, attributes: { exclude: ['password'] } });
  }

  @validator(createSchema)
  static async create(ctx, next) {
    const { request: { body: { first_name, last_name, password, email } } } = ctx;
    const userData = {
      first_name,
      last_name,
      email,
      password: PasswordService.saltHashPassword(password),
    };

    const user = await db.user.create(userData);
    ctx.body = user;
    await next();
  }

  static async fetchAll(ctx, next) {
    const users = await db.user.findAll({ attributes: { exclude: ['password'] } });
    ctx.body = { users };
    await next();
  }

  static async fetchOne(ctx, next) {
    const { id } = ctx.params;
    const user = await LoginController.getUser(id);
    if (!user) throw Boom.notFound('User was not found');
    ctx.body = { user };
    await next();
  }

  @validator(updateSchema)
  static async update(ctx, next) {
    const { params: { id }, request: { body: { first_name, last_name, email } } } = ctx;
    const user = await LoginController.getUser(id);
    const userData = {
      first_name,
      last_name,
      email,
    };

    await user.update(userData);
    ctx.body = { user };
    await next();
  }

  static async remove(ctx, next) {
    const { params: { id } } = ctx;
    const user = await LoginController.getUser(id);
    if (!user) throw Boom.notFound('User was not found');

    user.destroy();
    ctx.staus = 204;
    ctx.body = null;

    await next();
  }

}
