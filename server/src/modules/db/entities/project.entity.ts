import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { EmployeeProject } from './employee-project.entity';
import { Statistic } from './statistic.entity';

@Entity('project')
export class Project {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => EmployeeProject, (employeeProject) => employeeProject.project)
  employeeProject: EmployeeProject[];

  @OneToMany(() => Statistic, (statistic) => statistic.project)
  statistic: Statistic[];
}
