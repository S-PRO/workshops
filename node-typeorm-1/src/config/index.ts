import { IConfig } from './ConfigInterface';

const {
  API_PORT,
  TYPEORM_DRIVER_TYPE,
  TYPEORM_HOST,
  TYPEORM_PORT,
  TYPEORM_AUTO_SCHEMA_SYNC,
  MYSQL_DATABASE,
  MYSQL_USER,
  MYSQL_PASSWORD,
} = process.env;

const config: IConfig = {
  API_PORT,
  database: {
    type: TYPEORM_DRIVER_TYPE,
    host: TYPEORM_HOST,
    port: TYPEORM_PORT,
    database: MYSQL_DATABASE,
    username: MYSQL_USER,
    password: MYSQL_PASSWORD,
  },
  autoSchemaSync: TYPEORM_AUTO_SCHEMA_SYNC === 'true',
}

export default config;