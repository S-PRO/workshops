/**
 * Created by alex on 03.05.16.
 */
import fs from 'fs';
import _debugger from 'debug';

import Koa from 'koa';
import cors from 'koa-cors';
import logger from 'koa-logger';
import bodyParser from 'koa-bodyparser';
import convert from 'koa-convert';

import { CatchErrors } from './middlewares';
import { SERVER } from './config/app.config';

import db from './models';

const error = _debugger('koa2-starter:error');
const debug = _debugger('koa2-starter:debug');

const app = new Koa();

db.sequelize.authenticate().then(() => {
  /**
   * Add basic middleware and run server.
   */
  app
    .use(CatchErrors)
    .use(convert(cors({ origin: true })))
    .use(logger())
    .use(convert(bodyParser({ limit: '10mb' })))
    .listen(SERVER.port);

  /**
   * Init all routes.
   */
  fs.readdirSync(`${__dirname}/src`)
    .forEach((mod) => {
      try {
        app.use(require(`${__dirname}/src/${mod}/router.js`).default) // eslint-disable-line
        debug(`loaded: '${mod}' module.`);
      } catch (e) {
        error(`Error, while loading ${mod}`, e);
      }
    });
});
