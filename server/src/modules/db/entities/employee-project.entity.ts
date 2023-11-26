import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Employee } from './employee.entity';
import { Project } from './project.entity';

@Entity('employee_project')
export class EmployeeProject {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  employeeId: number;

  @Column()
  projectId: number;

  @Column()
  joinDate: Date;

  @Column()
  leaveDate: Date;

  @ManyToOne(() => Employee, (employee) => employee.employeeProject)
  @JoinColumn({ name: 'employeeId' })
  employee: Employee;

  @ManyToOne(() => Project, (project) => project.employeeProject)
  @JoinColumn({ name: 'projectId' })
  project: Project;
}
