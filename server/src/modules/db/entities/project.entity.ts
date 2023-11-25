import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { EmployeeProject } from './employee-project.entity';
import { Statistic } from './statistic.entity';

@Entity('project')
export class Project {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => EmployeeProject, (employeeProjects) => employeeProjects.projectId)
  employeeProjects: EmployeeProject[];

  @OneToMany(() => Statistic, (statistic) => statistic.employeeId)
  statistics: Statistic[];
}
