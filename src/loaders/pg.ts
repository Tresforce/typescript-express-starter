import 'reflect-metadata';
import { Connection, ConnectionOptions, createConnection } from 'typeorm';
import User from '../database/User';

const connectionOptions: ConnectionOptions = {
  type: 'postgres',
  host: 'db',
  port: 3005,
  password: 'psw',
  username: 'admin',
  logging: ['error', 'info'],
  synchronize: true,
  entities: [User],
  database: 'devdb'
};

async function getDbConnection(): Promise<Connection> {
  const connection = createConnection(connectionOptions);
  return connection;
}

export default getDbConnection;
