import { IConfig } from './ConfigInterface';

const {
  API_PORT,
  TYPEORM_DRIVER_TYPE,
  TYPEORM_AUTO_SCHEMA_SYNC,
  MYSQL_HOST,
  MYSQL_PORT,
  MYSQL_DATABASE,
  MYSQL_USER,
  MYSQL_PASSWORD,
} = process.env;

const config: IConfig = {
  API_PORT,
  database: {
    type: TYPEORM_DRIVER_TYPE,
    host: MYSQL_HOST,
    port: MYSQL_PORT,
    database: MYSQL_DATABASE,
    username: MYSQL_USER,
    password: MYSQL_PASSWORD,
  },
  autoSchemaSync: TYPEORM_AUTO_SCHEMA_SYNC === 'true',
}

export default config;