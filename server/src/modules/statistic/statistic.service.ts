import { Injectable } from '@nestjs/common';
import { WeightDataService } from '../weight-data/weight-data.service';

@Injectable()
export class StatisticService {
  constructor(private readonly weightDataService: WeightDataService) {}

  public async calculateBurnout() {
    const prepareWeightData = await this.weightDataService.getWeightData();

    // подсчёт процентов выгорания
  }
}
