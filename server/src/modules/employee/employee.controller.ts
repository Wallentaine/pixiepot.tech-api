import { Controller, Get, Param } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { Employee } from '../db/entities/employee.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Controller('employee')
export class EmployeeController {
  constructor(
    @InjectRepository(Employee) employeeRepository: Repository<Employee>,
    private readonly employeeService: EmployeeService
  ) {}

  @Get()
  public getEmployees() {}

  @Get(':id')
  public getEmployeeById(@Param() employeeId: number) {}
}
