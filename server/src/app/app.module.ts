import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { options } from '../modules/db/typeorm.config';
import * as Joi from 'joi';
import { DataSource } from 'typeorm';
import { EmployeeModule } from 'src/modules/employee/employee.module';
import { StatisticModule } from 'src/modules/statistic/statistic.module';
import { ProjectModule } from 'src/modules/project/project.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        NODE_ENV: Joi.string().valid('development', 'production').required(),
        DB_HOST: Joi.string().required(),
        DB_PORT: Joi.number().required(),
        DB_PASSWORD: Joi.string().required(),
        DB_NAME: Joi.string().required(),
      }),
    }),
    TypeOrmModule.forRootAsync(options()),
    EmployeeModule,
    StatisticModule,
    ProjectModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
