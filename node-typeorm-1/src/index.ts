import 'reflect-metadata';
import { createKoaServer } from 'routing-controllers';

import { API_PORT } from './config';
import * as controllers from './controllers';
import { CustomErrorHandler, AuthorizationChecker } from './middlewares';

createKoaServer({
  routePrefix: '/api',
  cors: true,
  defaultErrorHandler: false,
  middlewares: [CustomErrorHandler],
  authorizationChecker: AuthorizationChecker,
  controllers: Object.values(controllers)
}).listen(API_PORT);