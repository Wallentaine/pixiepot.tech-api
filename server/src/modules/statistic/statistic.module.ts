import { Module } from '@nestjs/common';
import { StatisticController } from './statistic.controller';
import { StatisticService } from './statistic.service';
import { WeightDataModule } from '../weight-data/weight-data.module';

@Module({
  imports: [WeightDataModule],
  controllers: [StatisticController],
  providers: [StatisticService],
})
export class StatisticModule {}
