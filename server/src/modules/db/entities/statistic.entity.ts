import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Employee } from './employee.entity';
import { Project } from './project.entity';

@Entity('statistic')
export class Statistic {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  employeeId: number;

  @Column()
  projectId: number;

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

  @ManyToOne(() => Employee, (employee) => employee)
  @JoinColumn({ name: 'employeeId' })
  employee: Employee;

  @ManyToOne(() => Project, (project) => project)
  @JoinColumn({ name: 'projectId' })
  project: Project;
}
