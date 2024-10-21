import * as dotenv from 'dotenv';
import { DataSource } from 'typeorm';

dotenv.config();
const ormconfigcli = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(<string>process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [
    __dirname + '/src/database/entities/*.entity{.ts,.js}',
    __dirname + '/src/database/entities/dynamic-data/*.entity{.ts,.js}',
  ],
  migrations: [__dirname + '/src/database/migrations/*{.ts,.js}'],
  migrationsTableName: 'migrations',
  migrationsRun: true,
  synchronize: false,
  logging: false,
});

export default ormconfigcli;
