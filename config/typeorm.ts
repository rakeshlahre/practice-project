import { registerAs } from '@nestjs/config';
import { config as dotenvConfig } from 'dotenv';
import { DataSource, DataSourceOptions } from 'typeorm';
import * as path from 'path'; // Import the 'path' module

dotenvConfig({ path: '.env' });

const config = {
  type: 'postgres',
  host: `${process.env.DATABASE_HOST}`,
  port: `${process.env.DATABASE_PORT}`,
  username: `${process.env.DATABASE_USERNAME}`,
  password: `${process.env.DATABASE_PASSWORD}`,
  database: `${process.env.DATABASE_NAME}`,
  // entities: [path.join(__dirname, '../dist/entity/*.entity{.ts,.js}')],
  // migrations: [path.join(__dirname, '../db/migrations/*{.ts,.js}')],
  entities: ['../db/entity/*{.ts,.js}'],
  migrations: ['../db/migrations/*{.ts,.js}'],
  // entities: [path.resolve(`${__dirname}/../db/**/**.entity{.ts,.js}`)],
  // migrations: [path.resolve(`${__dirname}/../db/migrations/*{.ts,.js}`)],
  migrationsTableName: 'migrations_history',
  autoLoadEntities: true,
  synchronize: false,
};

export default registerAs('typeorm', () => config);
export const connectionSource = new DataSource(config as DataSourceOptions);
