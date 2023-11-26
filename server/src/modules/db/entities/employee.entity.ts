import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Statistic } from './statistic.entity';
import { EmployeeProject } from './employee-project.entity';

@Entity('employee')
export class Employee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fullname: string;

  @Column()
  position: string;

  @Column()
  phoneNumber: string;

  @Column()
  address: string;

  @Column()
  chatAddress: string;

  @Column()
  birthDate: Date;

  @Column()
  expirience: number;

  @Column()
  burnoutPercent: number;

  @OneToMany(() => Statistic, (statistic) => statistic.employeeId)
  statistics: Statistic[];

  @OneToMany(() => EmployeeProject, (employeeProject) => employeeProject.employee)
  employeeProject: EmployeeProject[];
}
