import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTableWeightData1700935022262 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'weight_data',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
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
      }),
      true
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE weight_data');
  }
}
