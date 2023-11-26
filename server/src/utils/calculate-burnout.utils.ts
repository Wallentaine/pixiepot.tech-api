import { Metrics } from './types/calculate-burnout.types';

class CalculateBurnout {
  private calculateMetricBurnout(todayValue: number, maxValues: number): number {
    return Math.min((todayValue / maxValues) * 100, 100);
  }

  private checkTriggers(metrics: Metrics, maxValues: Metrics): boolean {
    if (
      metrics.countMessage > maxValues.countMessage ||
      metrics.countCommits > maxValues.countCommits ||
      metrics.countCharInMessage > maxValues.countCharInMessage ||
      metrics.countChangedCode > maxValues.countChangedCode ||
      metrics.countHoursInApps > maxValues.countHoursInApps ||
      metrics.countTasks > maxValues.countTasks ||
      metrics.countDaysOnTask > maxValues.countDaysOnTask ||
      metrics.lastUpGradeDate > maxValues.lastUpGradeDate ||
      metrics.countWorkYearInCompany > maxValues.countWorkYearInCompany ||
      metrics.countCall > maxValues.countCall ||
      metrics.callDuration > maxValues.callDuration ||
      metrics.countWorkHours > maxValues.countWorkHours ||
      metrics.countWorkHoursOver > maxValues.countWorkHoursOver ||
      metrics.countDaysSickTime > maxValues.countDaysSickTime ||
      metrics.countMissDeadline > maxValues.countMissDeadline ||
      metrics.countOutstandingTask > maxValues.countOutstandingTask
    ) {
      return true;
    }
    return false;
  }

  private calculate(todayMetrics: Metrics, maxValues: Metrics): number {
    let burnout = 0;
    const metricsKeys = Object.keys(todayMetrics) as Array<keyof Metrics>;
    metricsKeys.forEach((key) => {
      burnout += this.calculateMetricBurnout(todayMetrics[key], maxValues[key]);
    });

    if (this.checkTriggers(todayMetrics, maxValues)) {
      burnout += 100 / metricsKeys.length; // добавить штрафные баллы
    }

    return burnout / metricsKeys.length; // среднее значение
  }

  public getClearPercent(todayMetrics: Metrics, maxValues: Metrics) {
    return Math.floor(Math.min(100, this.calculate(todayMetrics, maxValues)));
  }
}

export default new CalculateBurnout();
