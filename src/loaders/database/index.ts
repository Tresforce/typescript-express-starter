import 'reflect-metadata';
import { Connection, ConnectionOptions, createConnection } from 'typeorm';
import config from '../../config';
import User from '../../database/User';
import { Logger } from '../../utils';

const logger = Logger(module);
const { host, port, username, password, database } = config.database;

export interface DatabaseConnectionOptions {
  type: string;
  host: string;
  port: number;
  password: string;
  username: string;
  logging: string[];
  synchronize: boolean;
  entities: any;
  database: string;
}

const pgConnectionOptions = {
  type: 'postgres',
  host: host!,
  port: port!,
  password: password!,
  username: username!,
  logging: ['error', 'info'],
  synchronize: true,
  entities: [User],
  database: database!
};

export default class Database {
  public connectionOptions: DatabaseConnectionOptions;

  private retries = 3;

  constructor(connectionOptions = pgConnectionOptions) {
    this.connectionOptions = connectionOptions;
  }

  private async getDbConnection(): Promise<Connection> {
    const connection = createConnection(
      this.connectionOptions as ConnectionOptions
    );
    return connection;
  }

  public async establishConnection(): Promise<Connection> {
    // FIXME get this working properly with queue
    let connection: Connection;
    while (this.retries > 0) {
      try {
        // eslint-disable-next-line no-await-in-loop
        connection = await this.getDbConnection();
        break;
      } catch (error) {
        if (this.retries > 0) {
          this.retries -= 1;
          logger.warn(
            `${error.message}retrying database connection: ${this.retries} left`
          );
          setTimeout(this.establishConnection, 3000);
        } else {
          logger.error(error);
          process.exit(1);
        }
      }
    }
    return connection!;
  }
}
