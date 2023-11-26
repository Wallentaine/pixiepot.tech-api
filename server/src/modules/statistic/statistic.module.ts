import { Module } from '@nestjs/common';
import { StatisticController } from './statistic.controller';
import { StatisticService } from './statistic.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Statistic } from '../db/entities/statistic.entity';
import { WeightData } from '../db/entities/weightData.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Statistic]), TypeOrmModule.forFeature([WeightData])],
  controllers: [StatisticController],
  providers: [StatisticService],
  exports: [],
})
export class StatisticModule {}
