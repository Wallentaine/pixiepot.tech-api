import { Module } from '@nestjs/common';
import { WeightData } from '../db/entities/weightData.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WeightDataService } from './weight-data.service';

@Module({
  imports: [TypeOrmModule.forFeature([WeightData])],
  providers: [WeightDataService],
})
export class WeightDataModule {}
