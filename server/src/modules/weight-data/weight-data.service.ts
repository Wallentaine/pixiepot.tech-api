import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { WeightData } from '../db/entities/weightData.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class WeightDataService {
  constructor(@InjectRepository(WeightData) private readonly weightRepository: Repository<WeightData>) {}

  public async getWeightData() {
    // получение последней записи по "весам"
  }
}
