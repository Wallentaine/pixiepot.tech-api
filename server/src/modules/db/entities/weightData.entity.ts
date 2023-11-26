import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('weight_data')
export class WeightData {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: Date;

  @Column()
  countMessage: number;

  @Column()
  countCharInMessage: number;

  @Column()
  countCommits: number;

  @Column()
  countChangedCode: number;

  @Column()
  countHoursInApps: number;

  @Column()
  countTasks: number;

  @Column()
  countDaysOnTask: number;

  @Column()
  lastUpGradeDate: Date;

  @Column()
  countWorkYearInCompany: number;

  @Column()
  countCall: number;

  @Column()
  callDuration: number;

  @Column()
  countWorkHours: number;

  @Column()
  countWorkHoursOver: number;

  @Column()
  countDaysSickTime: number;

  @Column()
  countMissDeadline: number;

  @Column()
  countOutstandingTask: number;

  @Column()
  telegramToken: string;
}
