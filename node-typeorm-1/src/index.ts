import 'reflect-metadata';
import { createKoaServer } from 'routing-controllers';
import { 
  createConnection, 
  ConnectionOptions, 
  DriverOptions, 
  EntityOptions, 
  Connection 
} from "typeorm";

import { Album, AlbumMeta } from './models';

import config from './config';
import * as controllers from './controllers';
import { CustomErrorHandler, AuthorizationChecker } from './middlewares';

createConnection(<ConnectionOptions> {
    driver: <DriverOptions> config.database,
    autoSchemaSync: config.autoSchemaSync,
    entities: <EntityOptions> [ Album, AlbumMeta ],
    migrations: [`${__dirname}/migrations/*.ts`],
    cli: { migrationsDir: `${__dirname}/migrations` },
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

