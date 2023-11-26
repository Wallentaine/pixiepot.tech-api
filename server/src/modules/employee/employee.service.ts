import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Employee } from '../db/entities/employee.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EmployeeService {
  constructor(@InjectRepository(Employee) private readonly employeeRepository: Repository<Employee>) {}

  public async getEmployees() {
    try {
      const employees = await this.employeeRepository
        .createQueryBuilder('employee')
        .leftJoinAndSelect('employee.employeeProject', 'employee_project')
        .leftJoinAndSelect('employee_project.project', 'project')
        .getMany();

      return employees.map((employee) => ({
        id: employee.id,
        fullname: employee.fullname,
        position: employee.position,
        burnout_rate: employee.burnoutPercent,
      }));
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  public async getEmployeeById(employeeId: number) {
    try {
      const employee = await this.employeeRepository
        .createQueryBuilder('employee')
        .leftJoinAndSelect('employee.employeeProject', 'employee_project')
        .leftJoinAndSelect('employee_project.project', 'project')
        .where('employee.id = :employeeId', { employeeId })
        .getOne();

      return employee;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
