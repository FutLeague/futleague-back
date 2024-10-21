import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';

dotenv.config();

const ormconfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(<string>process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [
    __dirname + '/src/core/infrastructure/typeorm/entities/*.entity{.ts,.js}',
    __dirname + '/src/core/infrastructure/typeorm/entities/*.entity{.ts,.js}',
  ],
  migrations: [__dirname + '/src/core/infrastructure/typeorm//migrations/*{.ts,.js}'],
  migrationsTableName: 'migrations',
  migrationsRun: true,
  synchronize: false,
  logging: false,
  autoLoadEntities: true,
  keepConnectionAlive: true,
};

export default ormconfig;
