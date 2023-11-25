import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Init1700875729543 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'employee',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'fullname',
            type: 'varchar',
            length: '128',
            isNullable: false,
          },
          {
            name: 'position',
            type: 'varchar',
            length: '128',
            isNullable: false,
          },
          {
            name: 'phoneNumber',
            type: 'varchar',
            length: '128',
            isNullable: false,
          },
          {
            name: 'address',
            type: 'varchar',
            length: '128',
            isNullable: false,
          },
          {
            name: 'chatAddress',
            type: 'varchar',
            length: '128',
            isNullable: false,
          },
          {
            name: 'birthDate',
            type: 'varchar',
            length: '128',
            isNullable: false,
          },
          {
            name: 'expirience',
            type: 'varchar',
            length: '128',
            isNullable: false,
          },
          {
            name: 'burnoutPercent',
            type: 'varchar',
            length: '128',
            isNullable: false,
          },
        ],
      }),
      true
    );

    await queryRunner.createTable(
      new Table({
        name: 'project',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'name',
            type: 'varchar',
            length: '128',
            isNullable: false,
          },
        ],
      }),
      true
    );

    await queryRunner.createTable(
      new Table({
        name: 'statistic',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'employeeId',
            type: 'int',
            isNullable: false,
          },
          {
            name: 'projectId',
            type: 'int',
            isNullable: false,
          },
          {
            name: 'date',
            type: 'timestamp',
            isNullable: false,
            default: 'now()',
          },
          {
            name: 'countMessage',
            type: 'int',
            isNullable: false,
          },
          {
            name: 'countCharInMessage',
            type: 'int',
            isNullable: false,
          },
          {
            name: 'countCommits',
            type: 'int',
            isNullable: false,
          },
          {
            name: 'countChangedCode',
            type: 'int',
            isNullable: false,
          },
          {
            name: 'countHoursInApps',
            type: 'int',
            isNullable: false,
          },
          {
            name: 'countTasks',
            type: 'int',
            isNullable: false,
          },
          {
            name: 'countDaysOnTask',
            type: 'int',
            isNullable: false,
          },
          {
            name: 'lastUpGradeDate',
            type: 'timestamp',
            isNullable: false,
          },
          {
            name: 'countWorkYearInCompany',
            type: 'int',
            isNullable: false,
          },
          {
            name: 'countCall',
            type: 'int',
            isNullable: false,
          },
          {
            name: 'callDuration',
            type: 'int',
            isNullable: false,
          },
          {
            name: 'countWorkHours',
            type: 'int',
            isNullable: false,
          },
          {
            name: 'countWorkHoursOver',
            type: 'int',
            isNullable: false,
          },
          {
            name: 'countDaysSickTime',
            type: 'int',
            isNullable: false,
          },
          {
            name: 'countMissDeadline',
            type: 'int',
            isNullable: false,
          },
          {
            name: 'countOutstandingTask',
            type: 'int',
            isNullable: false,
          },
        ],
        foreignKeys: [
          {
            columnNames: ['employeeId'],
            referencedTableName: 'employee',
            referencedColumnNames: ['id'],
            onDelete: 'CASCADE',
          },
          {
            columnNames: ['projectId'],
            referencedTableName: 'project',
            referencedColumnNames: ['id'],
            onDelete: 'CASCADE',
          },
        ],
      }),
      true
    );

    await queryRunner.createTable(
      new Table({
        name: 'employee_project',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'employeeId',
            type: 'int',
            isNullable: false,
          },
          {
            name: 'projectId',
            type: 'int',
            isNullable: false,
          },
          {
            name: 'joinDate',
            type: 'timestamp',
            isNullable: false,
          },
          {
            name: 'leaveDate',
            type: 'timestamp',
            isNullable: false,
          },
        ],
        foreignKeys: [
          {
            columnNames: ['employeeId'],
            referencedTableName: 'employee',
            referencedColumnNames: ['id'],
            onDelete: 'CASCADE',
          },
          {
            columnNames: ['projectId'],
            referencedTableName: 'project',
            referencedColumnNames: ['id'],
            onDelete: 'CASCADE',
          },
        ],
      }),
      true
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE employee_project');
    await queryRunner.query('DROP TABLE statistic');
    await queryRunner.query('DROP TABLE project');
    await queryRunner.query('DROP TABLE employee');
  }
}
