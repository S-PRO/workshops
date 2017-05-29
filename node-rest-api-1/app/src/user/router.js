import Router from 'koa-router';

import UserController from './user.controller';
import { CheckAuth, ValidateRequest } from './../../middlewares';
import { createSchema, updateSchema } from './schemas';

const router = new Router({ prefix: '/user' });

router
  .post('/', ValidateRequest(createSchema), UserController.create)
  .get('/', CheckAuth, UserController.fetchAll)
  .get('/:id', UserController.fetchOne)
  .put('/:id', ValidateRequest(updateSchema), UserController.update)
  .delete('/:id', UserController.remove);

export default router.routes();
