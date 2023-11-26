import { Body, Controller, Get, Post } from '@nestjs/common';
import { AddStatisticDto } from './dto/add-statistic.dto';
import { StatisticService } from './statistic.service';
import { WeightDataDto } from './dto/weight-data.dto';

@Controller('statistic')
export class StatisticController {
  constructor(private readonly statisticService: StatisticService) {}

  @Post()
  public async addStatistic(@Body() addStatisticDto: AddStatisticDto) {
    await this.statisticService.addStatistic(addStatisticDto);
  }

  @Post('weight-data')
  public async addWeightData(@Body() weightDataDto: WeightDataDto) {
    await this.statisticService.addWeightData(weightDataDto);
  }

  @Get()
  public async getStatistic() {
    return await this.statisticService.getStatistic();
  }

  @Get('employees-project')
  public async getStatisticEmployeesByEmployeeAndProject() {
    return await this.statisticService.getStatisticEmployeesByEmployeeAndProject();
  }

  @Get('employees')
  public async getStatisticEmployeesByEmployee() {
    return await this.statisticService.getStatisticEmployeesByEmployee();
  }
}
