import { ConfigService } from '@nestjs/config';
import { DataSource, DataSourceOptions } from 'typeorm';

const configService = new ConfigService();

export const dataSourceOptions = (config: ConfigService): DataSourceOptions => ({
  type: 'postgres',
  host: config.get('DB_HOST'),
  port: config.get('DB_PORT'),
  username: config.get('DB_USER'),
  password: config.get('DB_PASSWORD'),
  database: config.get('DB_NAME'),
  synchronize: false,
  migrations: [`${__dirname}/../**/migrations/*{.ts,.js}`],
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  logging: true,
  logger: 'advanced-console',
});

export const options = () => ({
  imports: [],
  useFactory: () => dataSourceOptions(configService),
  inject: [],
});

export default new DataSource(dataSourceOptions(configService));
