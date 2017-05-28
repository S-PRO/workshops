import Router from 'koa-router';

import UserController from './user.controller';

const router = new Router({ prefix: '/user' });

router
  .post('/', UserController.create)
  .get('/', UserController.fetchAll)
  .get('/:id', UserController.fetchOne)
  .put('/:id', UserController.update)
  .delete('/:id', UserController.remove);

export default router.routes();
