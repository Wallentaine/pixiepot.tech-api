import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { AddStatisticDto } from './dto/add-statistic.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Statistic } from '../db/entities/statistic.entity';
import { Repository } from 'typeorm';
import { Metrics } from 'src/utils/types/calculate-burnout.types';
import { WeightData } from '../db/entities/weightData.entity';
import calculateBurnout from 'src/utils/calculate-burnout.utils';
import commonUtils from 'src/utils/common.utils';

@Injectable()
export class StatisticService {
  constructor(
    @InjectRepository(Statistic) private readonly statisticRepository: Repository<Statistic>,
    @InjectRepository(WeightData) private readonly weightDataRepository: Repository<WeightData>
  ) {}

  public async addStatistic(addStatisticDto: AddStatisticDto) {
    try {
      await this.statisticRepository.manager.transaction(async (transactionEntityManager) => {
        transactionEntityManager.insert('statistic', { ...addStatisticDto });
      });
    } catch (error) {
      new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  public async getStatistic() {
    try {
      const sixMonthsAgo = new Date();
      sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);

      const statistics = await this.statisticRepository
        .createQueryBuilder('statistic')
        .addSelect('EXTRACT(EPOCH FROM CURRENT_DATE - statistic.lastUpGradeDate) / 86400 AS daysSinceLastUpgrade')
        .where('statistic.date >= :sixMonthsAgo', { sixMonthsAgo })
        .getMany();

      const preparedStatistics: Metrics[] = statistics.map((statisticEntity) => ({
        countMessage: statisticEntity.countMessage,
        countCharInMessage: statisticEntity.countCharInMessage,
        countCommits: statisticEntity.countCommits,
        countChangedCode: statisticEntity.countChangedCode,
        countHoursInApps: statisticEntity.countHoursInApps,
        countTasks: statisticEntity.countTasks,
        countDaysOnTask: statisticEntity.countDaysOnTask,
        lastUpGradeDate: commonUtils.calculateDiffDays(statisticEntity.lastUpGradeDate),
        countWorkYearInCompany: statisticEntity.countWorkYearInCompany,
        countCall: statisticEntity.countCall,
        callDuration: statisticEntity.callDuration,
        countWorkHours: statisticEntity.countWorkHours,
        countWorkHoursOver: statisticEntity.countWorkHoursOver,
        countDaysSickTime: statisticEntity.countDaysSickTime,
        countMissDeadline: statisticEntity.countMissDeadline,
        countOutstandingTask: statisticEntity.countOutstandingTask,
      }));

      const todayMetric = await this.weightDataRepository
        .createQueryBuilder('weight_data')
        .orderBy('weight_data.date', 'DESC') // Сортировка по убыванию даты
        .getOne();

      const preparedTodayMetrics = {
        countMessage: todayMetric.countMessage,
        countCharInMessage: todayMetric.countCharInMessage,
        countCommits: todayMetric.countCommits,
        countChangedCode: todayMetric.countChangedCode,
        countHoursInApps: todayMetric.countHoursInApps,
        countTasks: todayMetric.countTasks,
        countDaysOnTask: todayMetric.countDaysOnTask,
        lastUpGradeDate: commonUtils.calculateDiffDays(todayMetric.lastUpGradeDate),
        countWorkYearInCompany: todayMetric.countWorkYearInCompany,
        countCall: todayMetric.countCall,
        callDuration: todayMetric.callDuration,
        countWorkHours: todayMetric.countWorkHours,
        countWorkHoursOver: todayMetric.countWorkHoursOver,
        countDaysSickTime: todayMetric.countDaysSickTime,
        countMissDeadline: todayMetric.countMissDeadline,
        countOutstandingTask: todayMetric.countOutstandingTask,
      };

      const averagePercent = Math.floor(
        preparedStatistics
          .map((statisticEntity) => {
            return calculateBurnout.getClearPercent(statisticEntity, preparedTodayMetrics);
          })
          .reduce((accum, current) => (accum += current), 0) / preparedStatistics.length
      );

      return averagePercent;
    } catch (error) {
      new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  public async getStatisticEmployeesByEmployeeAndProject() {
    try {
      const sixMonthsAgo = new Date();
      sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);

      const todayMetric = await this.weightDataRepository
        .createQueryBuilder('weight_data')
        .orderBy('weight_data.date', 'DESC')
        .getOne();

      const preparedTodayMetrics = {
        countMessage: todayMetric.countMessage,
        countCharInMessage: todayMetric.countCharInMessage,
        countCommits: todayMetric.countCommits,
        countChangedCode: todayMetric.countChangedCode,
        countHoursInApps: todayMetric.countHoursInApps,
        countTasks: todayMetric.countTasks,
        countDaysOnTask: todayMetric.countDaysOnTask,
        lastUpGradeDate: commonUtils.calculateDiffDays(todayMetric.lastUpGradeDate),
        countWorkYearInCompany: todayMetric.countWorkYearInCompany,
        countCall: todayMetric.countCall,
        callDuration: todayMetric.callDuration,
        countWorkHours: todayMetric.countWorkHours,
        countWorkHoursOver: todayMetric.countWorkHoursOver,
        countDaysSickTime: todayMetric.countDaysSickTime,
        countMissDeadline: todayMetric.countMissDeadline,
        countOutstandingTask: todayMetric.countOutstandingTask,
      };

      const statistics = await this.statisticRepository
        .createQueryBuilder('statistic')
        .addSelect('EXTRACT(EPOCH FROM CURRENT_DATE - statistic.lastUpGradeDate) / 86400 AS daysSinceLastUpgrade')
        .leftJoinAndSelect('statistic.employee', 'employee')
        .leftJoinAndSelect('statistic.project', 'project')
        .where('statistic.date >= :sixMonthsAgo', { sixMonthsAgo })
        .getMany();

      const combinedStatisticByEmployee = new Map<string, Statistic[]>();

      statistics.forEach((statisticEntity) => {
        if (combinedStatisticByEmployee.has(String(statisticEntity.employeeId) + String(statisticEntity.projectId))) {
          combinedStatisticByEmployee.set(String(statisticEntity.employeeId) + String(statisticEntity.projectId), [
            ...combinedStatisticByEmployee.get(String(statisticEntity.employeeId) + String(statisticEntity.projectId)),
            statisticEntity,
          ]);
        } else {
          combinedStatisticByEmployee.set(String(statisticEntity.employeeId) + String(statisticEntity.projectId), [
            statisticEntity,
          ]);
        }
      });

      const preparedData = [];

      for (const key of combinedStatisticByEmployee.keys()) {
        const avgBurnout = Math.floor(
          combinedStatisticByEmployee
            .get(key)
            .map((statisticEntity) => {
              return calculateBurnout.getClearPercent(
                {
                  countMessage: statisticEntity.countMessage,
                  countCharInMessage: statisticEntity.countCharInMessage,
                  countCommits: statisticEntity.countCommits,
                  countChangedCode: statisticEntity.countChangedCode,
                  countHoursInApps: statisticEntity.countHoursInApps,
                  countTasks: statisticEntity.countTasks,
                  countDaysOnTask: statisticEntity.countDaysOnTask,
                  lastUpGradeDate: commonUtils.calculateDiffDays(statisticEntity.lastUpGradeDate),
                  countWorkYearInCompany: statisticEntity.countWorkYearInCompany,
                  countCall: statisticEntity.countCall,
                  callDuration: statisticEntity.callDuration,
                  countWorkHours: statisticEntity.countWorkHours,
                  countWorkHoursOver: statisticEntity.countWorkHoursOver,
                  countDaysSickTime: statisticEntity.countDaysSickTime,
                  countMissDeadline: statisticEntity.countMissDeadline,
                  countOutstandingTask: statisticEntity.countOutstandingTask,
                },
                preparedTodayMetrics
              );
            })
            .reduce((accum, current) => (accum += current), 0) / combinedStatisticByEmployee.get(key).length
        );

        preparedData.push({
          id_epmloyee: combinedStatisticByEmployee.get(key)[0].id,
          burnout: avgBurnout,
          date: combinedStatisticByEmployee.get(key)[0].date,
          project: combinedStatisticByEmployee.get(key)[0].project.name,
        });
      }

      return preparedData;
    } catch (error) {
      new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  public async getStatisticEmployeesByEmployee() {
    try {
      const sixMonthsAgo = new Date();
      sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);

      const todayMetric = await this.weightDataRepository
        .createQueryBuilder('weight_data')
        .orderBy('weight_data.date', 'DESC')
        .getOne();

      const preparedTodayMetrics = {
        countMessage: todayMetric.countMessage,
        countCharInMessage: todayMetric.countCharInMessage,
        countCommits: todayMetric.countCommits,
        countChangedCode: todayMetric.countChangedCode,
        countHoursInApps: todayMetric.countHoursInApps,
        countTasks: todayMetric.countTasks,
        countDaysOnTask: todayMetric.countDaysOnTask,
        lastUpGradeDate: commonUtils.calculateDiffDays(todayMetric.lastUpGradeDate),
        countWorkYearInCompany: todayMetric.countWorkYearInCompany,
        countCall: todayMetric.countCall,
        callDuration: todayMetric.callDuration,
        countWorkHours: todayMetric.countWorkHours,
        countWorkHoursOver: todayMetric.countWorkHoursOver,
        countDaysSickTime: todayMetric.countDaysSickTime,
        countMissDeadline: todayMetric.countMissDeadline,
        countOutstandingTask: todayMetric.countOutstandingTask,
      };

      const statistics = await this.statisticRepository
        .createQueryBuilder('statistic')
        .addSelect('EXTRACT(EPOCH FROM CURRENT_DATE - statistic.lastUpGradeDate) / 86400 AS daysSinceLastUpgrade')
        .leftJoinAndSelect('statistic.employee', 'employee')
        .leftJoinAndSelect('statistic.project', 'project')
        .where('statistic.date >= :sixMonthsAgo', { sixMonthsAgo })
        .getMany();

      const combinedStatisticByEmployee = new Map<string, Statistic[]>();

      statistics.forEach((statisticEntity) => {
        if (combinedStatisticByEmployee.has(String(statisticEntity.employeeId))) {
          combinedStatisticByEmployee.set(String(statisticEntity.employeeId), [
            ...combinedStatisticByEmployee.get(String(statisticEntity.employeeId)),
            statisticEntity,
          ]);
        } else {
          combinedStatisticByEmployee.set(String(statisticEntity.employeeId), [statisticEntity]);
        }
      });

      const preparedData = [];

      for (const key of combinedStatisticByEmployee.keys()) {
        const avgBurnout = Math.floor(
          combinedStatisticByEmployee
            .get(key)
            .map((statisticEntity) => {
              return calculateBurnout.getClearPercent(
                {
                  countMessage: statisticEntity.countMessage,
                  countCharInMessage: statisticEntity.countCharInMessage,
                  countCommits: statisticEntity.countCommits,
                  countChangedCode: statisticEntity.countChangedCode,
                  countHoursInApps: statisticEntity.countHoursInApps,
                  countTasks: statisticEntity.countTasks,
                  countDaysOnTask: statisticEntity.countDaysOnTask,
                  lastUpGradeDate: commonUtils.calculateDiffDays(statisticEntity.lastUpGradeDate),
                  countWorkYearInCompany: statisticEntity.countWorkYearInCompany,
                  countCall: statisticEntity.countCall,
                  callDuration: statisticEntity.callDuration,
                  countWorkHours: statisticEntity.countWorkHours,
                  countWorkHoursOver: statisticEntity.countWorkHoursOver,
                  countDaysSickTime: statisticEntity.countDaysSickTime,
                  countMissDeadline: statisticEntity.countMissDeadline,
                  countOutstandingTask: statisticEntity.countOutstandingTask,
                },
                preparedTodayMetrics
              );
            })
            .reduce((accum, current) => (accum += current), 0) / combinedStatisticByEmployee.get(key).length
        );

        preparedData.push({
          id_epmloyee: combinedStatisticByEmployee.get(key)[0].id,
          burnout: avgBurnout,
          date: combinedStatisticByEmployee.get(key)[0].date,
          project: combinedStatisticByEmployee.get(key)[0].project.name,
        });
      }

      return preparedData;
    } catch (error) {
      new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
