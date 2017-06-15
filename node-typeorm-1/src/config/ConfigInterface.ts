export interface IDatabaseConfig {
  type: string,
  host: string,
  port: number,
  database: string,
  username: string,
  password: string,
}

export interface IConfig {
  API_PORT: string,
  database: IDatabaseConfig,
  autoSchemaSync: boolean,
}