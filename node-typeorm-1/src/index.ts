import 'reflect-metadata';
import { createKoaServer } from 'routing-controllers';
import { 
  createConnection, 
  ConnectionOptions, 
  DriverOptions, 
  EntityOptions, 
  Connection 
} from "typeorm";

import { Album } from './models';

import config from './config';
import * as controllers from './controllers';
import { CustomErrorHandler, AuthorizationChecker } from './middlewares';

createConnection(<ConnectionOptions> {
    driver: <DriverOptions> config.database,
    entities: <EntityOptions> [ Album ],
    migrations: [`${__dirname}/migrations/*.ts`],
    cli: { migrationsDir: `${__dirname}/migrations` },
    autoSchemaSync: config.autoSchemaSync,
}).then(async (connection: Connection) => {

  createKoaServer({
    routePrefix: '/api',
    cors: true,
    defaultErrorHandler: false,
    middlewares: [CustomErrorHandler],
    authorizationChecker: AuthorizationChecker,
    controllers: Object.values(controllers)
  }).listen(config.API_PORT);

}).catch(error => console.log("Error: ", error));
