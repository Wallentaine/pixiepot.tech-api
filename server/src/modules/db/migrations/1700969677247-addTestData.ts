import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddTestData1700969677247 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const projectsDataset = [
      {
        name: 'Intersight',
      },
      {
        name: 'OuterSight',
      },
      {
        name: 'yalla',
      },
      {
        name: 'cartoones',
      },
    ];

    for (const project of projectsDataset) {
      await queryRunner.query(`
        INSERT INTO project (name)
        VALUES ('${project.name}');
      `);
    }

    const projects = await queryRunner.query(`
        SELECT * FROM project;
    `);

    const employeesDataset = [
      {
        fullname: 'Oleg Petrovich Hatko',
        position: 'middle developmer',
        phoneNumber: '89188652344',
        address: 'Russia',
        chatAddress: 'https://telegramm/userOleg',
        birthDate: '2000-11-25 23:46:51.000000',
        expirience: 4,
        burnoutPercent: 0,
      },
      {
        fullname: 'John Doe',
        position: 'freelance developer',
        phoneNumber: '+1 555 894 4321',
        address: 'USA',
        chatAddress: 'https://telegramm/johndoe',
        birthDate: '2001-02-20 13:46:51.000000',
        expirience: 10,
        burnoutPercent: 0,
      },
      {
        fullname: 'Jane Smith',
        position: 'data analyst',
        phoneNumber: '+1 555 894 4322',
        address: 'Canada',
        chatAddress: 'https://telegramm/janesmith',
        birthDate: '2002-03-01 14:46:51.000000',
        expirience: 8,
        burnoutPercent: 0,
      },
      {
        fullname: 'Bob Johnson',
        position: 'project manager',
        phoneNumber: '+1 555 894 4323',
        address: 'UK',
        chatAddress: 'https://telegramm/bobjohnson',
        birthDate: '2003-04-01 15:46:51.000000',
        expirience: 12,
        burnoutPercent: 0,
      },
      {
        fullname: 'Alice Brown',
        position: 'furry artist',
        phoneNumber: '+1 555 894 4324',
        address: 'Australia',
        chatAddress: 'https://telegramm/alicebrown',
        birthDate: '2004-05-01 16:46:51.000000',
        expirience: 6,
        burnoutPercent: 0,
      },
      {
        fullname: 'Eve White',
        position: 'tax accountant',
        phoneNumber: '+1 555 894 4325',
        address: 'Germany',
        chatAddress: 'https://telegramm/evewhite',
        birthDate: '2005-06-01 17:46:51.000000',
        expirience: 15,
        burnoutPercent: 0.25,
      },
      {
        fullname: 'Alexei Smirnov',
        position: 'Lead Developer',
        phoneNumber: '555-893-4321',
        address: 'Moscow',
        chatAddress: 'https://telegramm/alexsmirnov',
        birthDate: '2000-11-28 16:46:51.000000',
        expirience: 10,
        burnoutPercent: 0,
      },
      {
        fullname: 'Anastasia Petrova',
        position: 'UI/UX Designer',
        phoneNumber: '555-894-4322',
        address: 'St. Petersburg',
        chatAddress: 'https://telegramm/anastasiapetrova',
        birthDate: '2001-02-02 14:46:51.000000',
        expirience: 5,
        burnoutPercent: 0,
      },
      {
        fullname: 'Dmitry Khrustalev',
        position: 'Technical Support Specialist',
        phoneNumber: '555-895-4323',
        address: 'Krasnoyarsk',
        chatAddress: 'https://telegramm/dimkhrustalev',
        birthDate: '2002-03-03 15:46:51.000000',
        expirience: 8,
        burnoutPercent: 0,
      },
      {
        fullname: 'Irina Smirnova',
        position: 'Marketing Manager',
        phoneNumber: '555-896-4324',
        address: 'Yekaterinburg',
        chatAddress: 'https://telegramm/irismirnova',
        birthDate: '2003-04-04 16:46:51.000000',
        expirience: 12,
        burnoutPercent: 0,
      },
      {
        fullname: 'Artyom Turov',
        position: 'Product Manager',
        phoneNumber: '555-897-4325',
        address: 'Chicago',
        chatAddress: 'https://telegramm/artyomturov',
        birthDate: '2004-05-05 17:46:51.000000',
        expirience: 10,
        burnoutPercent: 0,
      },
    ];

    for (const employee of employeesDataset) {
      console.log(employee);
      await queryRunner.query(`
          INSERT INTO employee (fullname, position, address, "chatAddress", "phoneNumber", "birthDate", expirience, "burnoutPercent")
          VALUES ('${employee.fullname}', '${employee.position}', '${employee.address}', '${employee.chatAddress}', '${employee.phoneNumber}', '${employee.birthDate}', ${employee.expirience}, ${employee.burnoutPercent});
        `);
    }

    const employees = await queryRunner.query(`SELECT * FROM employee`);

    const statisticDataset = [
      {
        countMessage: 25,
        countCharInMessage: 1200,
        countCommits: 5,
        countChangedCode: 300,
        countHoursInApps: 30,
        countTasks: 15,
        countDaysOnTask: 10,
        lastUpGradeDate: '2023-10-15 12:30:00.000000',
        countWorkYearInCompany: 3,
        countCall: 20,
        callDuration: 300,
        countWorkHours: 40,
        countWorkHoursOver: 5,
        countDaysSickTime: 2,
        countMissDeadline: 1,
        countOutstandingTask: 3,
      },
      {
        countMessage: 15,
        countCharInMessage: 800,
        countCommits: 3,
        countChangedCode: 200,
        countHoursInApps: 25,
        countTasks: 10,
        countDaysOnTask: 8,
        lastUpGradeDate: '2023-08-20 09:45:00.000000',
        countWorkYearInCompany: 2,
        countCall: 15,
        callDuration: 200,
        countWorkHours: 35,
        countWorkHoursOver: 7,
        countDaysSickTime: 1,
        countMissDeadline: 0,
        countOutstandingTask: 2,
      },
      {
        countMessage: 30,
        countCharInMessage: 1500,
        countCommits: 8,
        countChangedCode: 400,
        countHoursInApps: 40,
        countTasks: 20,
        countDaysOnTask: 12,
        lastUpGradeDate: '2023-09-25 15:00:00.000000',
        countWorkYearInCompany: 4,
        countCall: 25,
        callDuration: 400,
        countWorkHours: 45,
        countWorkHoursOver: 8,
        countDaysSickTime: 3,
        countMissDeadline: 2,
        countOutstandingTask: 5,
      },
      {
        countMessage: 18,
        countCharInMessage: 900,
        countCommits: 4,
        countChangedCode: 250,
        countHoursInApps: 26,
        countTasks: 14,
        countDaysOnTask: 7,
        lastUpGradeDate: '2023-11-03 14:45:00.000000',
        countWorkYearInCompany: 2,
        countCall: 18,
        callDuration: 250,
        countWorkHours: 38,
        countWorkHoursOver: 6,
        countDaysSickTime: 1,
        countMissDeadline: 0,
        countOutstandingTask: 4,
      },
      {
        countMessage: 22,
        countCharInMessage: 1100,
        countCommits: 5,
        countChangedCode: 300,
        countHoursInApps: 28,
        countTasks: 13,
        countDaysOnTask: 9,
        lastUpGradeDate: '2023-10-20 11:30:00.000000',
        countWorkYearInCompany: 3,
        countCall: 20,
        callDuration: 300,
        countWorkHours: 42,
        countWorkHoursOver: 4,
        countDaysSickTime: 2,
        countMissDeadline: 1,
        countOutstandingTask: 3,
      },
      {
        countMessage: 28,
        countCharInMessage: 1300,
        countCommits: 6,
        countChangedCode: 350,
        countHoursInApps: 34,
        countTasks: 16,
        countDaysOnTask: 11,
        lastUpGradeDate: '2023-09-18 09:00:00.000000',
        countWorkYearInCompany: 2,
        countCall: 25,
        callDuration: 350,
        countWorkHours: 36,
        countWorkHoursOver: 5,
        countDaysSickTime: 1,
        countMissDeadline: 0,
        countOutstandingTask: 2,
      },
      {
        countMessage: 10,
        countCharInMessage: 300,
        countCommits: 2,
        countChangedCode: 150,
        countHoursInApps: 20,
        countTasks: 8,
        countDaysOnTask: 5,
        lastUpGradeDate: '2023-11-25 23:46:51.000000',
        countWorkYearInCompany: 1,
        countCall: 8,
        callDuration: 150,
        countWorkHours: 30,
        countWorkHoursOver: 2,
        countDaysSickTime: 1,
        countMissDeadline: 1,
        countOutstandingTask: 4,
      },
      {
        countMessage: 15,
        countCharInMessage: 400,
        countCommits: 2,
        countChangedCode: 200,
        countHoursInApps: 22,
        countTasks: 9,
        countDaysOnTask: 6,
        lastUpGradeDate: '2023-11-24 22:46:51.000000',
        countWorkYearInCompany: 2,
        countCall: 9,
        callDuration: 160,
        countWorkHours: 32,
        countWorkHoursOver: 3,
        countDaysSickTime: 2,
        countMissDeadline: 1,
        countOutstandingTask: 3,
      },
      {
        countMessage: 8,
        countCharInMessage: 150,
        countCommits: 1,
        countChangedCode: 80,
        countHoursInApps: 15,
        countTasks: 6,
        countDaysOnTask: 3,
        lastUpGradeDate: '2023-11-25 23:46:51.000000',
        countWorkYearInCompany: 1,
        countCall: 5,
        callDuration: 100,
        countWorkHours: 25,
        countWorkHoursOver: 1,
        countDaysSickTime: 1,
        countMissDeadline: 0,
        countOutstandingTask: 2,
      },
      {
        countMessage: 12,
        countCharInMessage: 200,
        countCommits: 2,
        countChangedCode: 100,
        countHoursInApps: 18,
        countTasks: 7,
        countDaysOnTask: 4,
        lastUpGradeDate: '2023-11-24 22:46:51.000000',
        countWorkYearInCompany: 2,
        countCall: 7,
        callDuration: 120,
        countWorkHours: 28,
        countWorkHoursOver: 2,
        countDaysSickTime: 0,
        countMissDeadline: 1,
        countOutstandingTask: 3,
      },
      {
        countMessage: 10,
        countCharInMessage: 180,
        countCommits: 1,
        countChangedCode: 90,
        countHoursInApps: 16,
        countTasks: 5,
        countDaysOnTask: 2,
        lastUpGradeDate: '2023-11-23 21:46:51.000000',
        countWorkYearInCompany: 1,
        countCall: 6,
        callDuration: 110,
        countWorkHours: 26,
        countWorkHoursOver: 1,
        countDaysSickTime: 0,
        countMissDeadline: 0,
        countOutstandingTask: 1,
      },
      {
        countMessage: 7,
        countCharInMessage: 120,
        countCommits: 1,
        countChangedCode: 70,
        countHoursInApps: 14,
        countTasks: 4,
        countDaysOnTask: 3,
        lastUpGradeDate: '2023-11-22 20:46:51.000000',
        countWorkYearInCompany: 2,
        countCall: 4,
        callDuration: 90,
        countWorkHours: 24,
        countWorkHoursOver: 1,
        countDaysSickTime: 1,
        countMissDeadline: 0,
        countOutstandingTask: 2,
      },
      {
        countMessage: 9,
        countCharInMessage: 160,
        countCommits: 2,
        countChangedCode: 110,
        countHoursInApps: 17,
        countTasks: 6,
        countDaysOnTask: 2,
        lastUpGradeDate: '2023-11-21 19:46:51.000000',
        countWorkYearInCompany: 1,
        countCall: 5,
        callDuration: 100,
        countWorkHours: 25,
        countWorkHoursOver: 0,
        countDaysSickTime: 0,
        countMissDeadline: 0,
        countOutstandingTask: 1,
      },
      {
        countMessage: 5,
        countCharInMessage: 270,
        countCommits: 3,
        countChangedCode: 47,
        countHoursInApps: 13,
        countTasks: 7,
        countDaysOnTask: 4,
        lastUpGradeDate: '2023-11-20 23:46:51.000000',
        countWorkYearInCompany: 1,
        countCall: 15,
        callDuration: 120,
        countWorkHours: 40,
        countWorkHoursOver: 2,
        countDaysSickTime: 2,
        countMissDeadline: 1,
        countOutstandingTask: 1,
      },
      {
        countMessage: 20,
        countCharInMessage: 600,
        countCommits: 8,
        countChangedCode: 130,
        countHoursInApps: 21,
        countTasks: 18,
        countDaysOnTask: 14,
        lastUpGradeDate: '2023-11-21 23:46:51.000000',
        countWorkYearInCompany: 2,
        countCall: 35,
        callDuration: 250,
        countWorkHours: 55,
        countWorkHoursOver: 6,
        countDaysSickTime: 3,
        countMissDeadline: 2,
        countOutstandingTask: 4,
      },
      {
        countMessage: 13,
        countCharInMessage: 400,
        countCommits: 5,
        countChangedCode: 100,
        countHoursInApps: 18,
        countTasks: 16,
        countDaysOnTask: 7,
        lastUpGradeDate: '2023-11-22 23:46:51.000000',
        countWorkYearInCompany: 3,
        countCall: 28,
        callDuration: 210,
        countWorkHours: 45,
        countWorkHoursOver: 4,
        countDaysSickTime: 4,
        countMissDeadline: 3,
        countOutstandingTask: 3,
      },
      {
        countMessage: 17,
        countCharInMessage: 500,
        countCommits: 7,
        countChangedCode: 120,
        countHoursInApps: 20,
        countTasks: 20,
        countDaysOnTask: 10,
        lastUpGradeDate: '2023-11-23 23:46:51.000000',
        countWorkYearInCompany: 4,
        countCall: 38,
        callDuration: 300,
        countWorkHours: 60,
        countWorkHoursOver: 5,
        countDaysSickTime: 5,
        countMissDeadline: 4,
        countOutstandingTask: 2,
      },
      {
        countMessage: 20,
        countCharInMessage: 1000,
        countCommits: 4,
        countChangedCode: 250,
        countHoursInApps: 28,
        countTasks: 12,
        countDaysOnTask: 9,
        lastUpGradeDate: '2023-07-18 11:00:00.000000',
        countWorkYearInCompany: 2,
        countCall: 18,
        callDuration: 250,
        countWorkHours: 36,
        countWorkHoursOver: 6,
        countDaysSickTime: 1,
        countMissDeadline: 1,
        countOutstandingTask: 2,
      },
      {
        countMessage: 25,
        countCharInMessage: 1200,
        countCommits: 5,
        countChangedCode: 300,
        countHoursInApps: 30,
        countTasks: 15,
        countDaysOnTask: 10,
        lastUpGradeDate: '2023-10-15 12:30:00.000000',
        countWorkYearInCompany: 3,
        countCall: 20,
        callDuration: 300,
        countWorkHours: 40,
        countWorkHoursOver: 5,
        countDaysSickTime: 2,
        countMissDeadline: 1,
        countOutstandingTask: 3,
      },
      {
        countMessage: 15,
        countCharInMessage: 800,
        countCommits: 3,
        countChangedCode: 200,
        countHoursInApps: 25,
        countTasks: 10,
        countDaysOnTask: 8,
        lastUpGradeDate: '2023-08-20 09:45:00.000000',
        countWorkYearInCompany: 2,
        countCall: 15,
        callDuration: 200,
        countWorkHours: 35,
        countWorkHoursOver: 7,
        countDaysSickTime: 1,
        countMissDeadline: 0,
        countOutstandingTask: 2,
      },
      {
        countMessage: 30,
        countCharInMessage: 1500,
        countCommits: 8,
        countChangedCode: 400,
        countHoursInApps: 40,
        countTasks: 20,
        countDaysOnTask: 12,
        lastUpGradeDate: '2023-09-25 15:00:00.000000',
        countWorkYearInCompany: 4,
        countCall: 25,
        callDuration: 400,
        countWorkHours: 45,
        countWorkHoursOver: 8,
        countDaysSickTime: 3,
        countMissDeadline: 2,
        countOutstandingTask: 5,
      },
      {
        countMessage: 18,
        countCharInMessage: 900,
        countCommits: 4,
        countChangedCode: 250,
        countHoursInApps: 26,
        countTasks: 14,
        countDaysOnTask: 7,
        lastUpGradeDate: '2023-11-03 14:45:00.000000',
        countWorkYearInCompany: 2,
        countCall: 18,
        callDuration: 250,
        countWorkHours: 38,
        countWorkHoursOver: 6,
        countDaysSickTime: 1,
        countMissDeadline: 0,
        countOutstandingTask: 4,
      },
      {
        countMessage: 22,
        countCharInMessage: 1100,
        countCommits: 5,
        countChangedCode: 300,
        countHoursInApps: 28,
        countTasks: 13,
        countDaysOnTask: 9,
        lastUpGradeDate: '2023-10-20 11:30:00.000000',
        countWorkYearInCompany: 3,
        countCall: 20,
        callDuration: 300,
        countWorkHours: 42,
        countWorkHoursOver: 4,
        countDaysSickTime: 2,
        countMissDeadline: 1,
        countOutstandingTask: 3,
      },
      {
        countMessage: 28,
        countCharInMessage: 1300,
        countCommits: 6,
        countChangedCode: 350,
        countHoursInApps: 34,
        countTasks: 16,
        countDaysOnTask: 11,
        lastUpGradeDate: '2023-09-18 09:00:00.000000',
        countWorkYearInCompany: 2,
        countCall: 25,
        callDuration: 350,
        countWorkHours: 36,
        countWorkHoursOver: 5,
        countDaysSickTime: 1,
        countMissDeadline: 0,
        countOutstandingTask: 2,
      },
      {
        countMessage: 10,
        countCharInMessage: 300,
        countCommits: 2,
        countChangedCode: 150,
        countHoursInApps: 20,
        countTasks: 8,
        countDaysOnTask: 5,
        lastUpGradeDate: '2023-11-25 23:46:51.000000',
        countWorkYearInCompany: 1,
        countCall: 8,
        callDuration: 150,
        countWorkHours: 30,
        countWorkHoursOver: 2,
        countDaysSickTime: 1,
        countMissDeadline: 1,
        countOutstandingTask: 4,
      },
      {
        countMessage: 15,
        countCharInMessage: 400,
        countCommits: 2,
        countChangedCode: 200,
        countHoursInApps: 22,
        countTasks: 9,
        countDaysOnTask: 6,
        lastUpGradeDate: '2023-11-24 22:46:51.000000',
        countWorkYearInCompany: 2,
        countCall: 9,
        callDuration: 160,
        countWorkHours: 32,
        countWorkHoursOver: 3,
        countDaysSickTime: 2,
        countMissDeadline: 1,
        countOutstandingTask: 3,
      },
      {
        countMessage: 8,
        countCharInMessage: 150,
        countCommits: 1,
        countChangedCode: 80,
        countHoursInApps: 15,
        countTasks: 6,
        countDaysOnTask: 3,
        lastUpGradeDate: '2023-11-25 23:46:51.000000',
        countWorkYearInCompany: 1,
        countCall: 5,
        callDuration: 100,
        countWorkHours: 25,
        countWorkHoursOver: 1,
        countDaysSickTime: 1,
        countMissDeadline: 0,
        countOutstandingTask: 2,
      },
      {
        countMessage: 12,
        countCharInMessage: 200,
        countCommits: 2,
        countChangedCode: 100,
        countHoursInApps: 18,
        countTasks: 7,
        countDaysOnTask: 4,
        lastUpGradeDate: '2023-11-24 22:46:51.000000',
        countWorkYearInCompany: 2,
        countCall: 7,
        callDuration: 120,
        countWorkHours: 28,
        countWorkHoursOver: 2,
        countDaysSickTime: 0,
        countMissDeadline: 1,
        countOutstandingTask: 3,
      },
      {
        countMessage: 10,
        countCharInMessage: 180,
        countCommits: 1,
        countChangedCode: 90,
        countHoursInApps: 16,
        countTasks: 5,
        countDaysOnTask: 2,
        lastUpGradeDate: '2023-11-23 21:46:51.000000',
        countWorkYearInCompany: 1,
        countCall: 6,
        callDuration: 110,
        countWorkHours: 26,
        countWorkHoursOver: 1,
        countDaysSickTime: 0,
        countMissDeadline: 0,
        countOutstandingTask: 1,
      },
      {
        countMessage: 7,
        countCharInMessage: 120,
        countCommits: 1,
        countChangedCode: 70,
        countHoursInApps: 14,
        countTasks: 4,
        countDaysOnTask: 3,
        lastUpGradeDate: '2023-11-22 20:46:51.000000',
        countWorkYearInCompany: 2,
        countCall: 4,
        callDuration: 90,
        countWorkHours: 24,
        countWorkHoursOver: 1,
        countDaysSickTime: 1,
        countMissDeadline: 0,
        countOutstandingTask: 2,
      },
      {
        countMessage: 9,
        countCharInMessage: 160,
        countCommits: 2,
        countChangedCode: 110,
        countHoursInApps: 17,
        countTasks: 6,
        countDaysOnTask: 2,
        lastUpGradeDate: '2023-11-21 19:46:51.000000',
        countWorkYearInCompany: 1,
        countCall: 5,
        callDuration: 100,
        countWorkHours: 25,
        countWorkHoursOver: 0,
        countDaysSickTime: 0,
        countMissDeadline: 0,
        countOutstandingTask: 1,
      },
      {
        countMessage: 5,
        countCharInMessage: 270,
        countCommits: 3,
        countChangedCode: 47,
        countHoursInApps: 13,
        countTasks: 7,
        countDaysOnTask: 4,
        lastUpGradeDate: '2023-11-20 23:46:51.000000',
        countWorkYearInCompany: 1,
        countCall: 15,
        callDuration: 120,
        countWorkHours: 40,
        countWorkHoursOver: 2,
        countDaysSickTime: 2,
        countMissDeadline: 1,
        countOutstandingTask: 1,
      },
      {
        countMessage: 20,
        countCharInMessage: 600,
        countCommits: 8,
        countChangedCode: 130,
        countHoursInApps: 21,
        countTasks: 18,
        countDaysOnTask: 14,
        lastUpGradeDate: '2023-11-21 23:46:51.000000',
        countWorkYearInCompany: 2,
        countCall: 35,
        callDuration: 250,
        countWorkHours: 55,
        countWorkHoursOver: 6,
        countDaysSickTime: 3,
        countMissDeadline: 2,
        countOutstandingTask: 4,
      },
      {
        countMessage: 13,
        countCharInMessage: 400,
        countCommits: 5,
        countChangedCode: 100,
        countHoursInApps: 18,
        countTasks: 16,
        countDaysOnTask: 7,
        lastUpGradeDate: '2023-11-22 23:46:51.000000',
        countWorkYearInCompany: 3,
        countCall: 28,
        callDuration: 210,
        countWorkHours: 45,
        countWorkHoursOver: 4,
        countDaysSickTime: 4,
        countMissDeadline: 3,
        countOutstandingTask: 3,
      },
      {
        countMessage: 17,
        countCharInMessage: 500,
        countCommits: 7,
        countChangedCode: 120,
        countHoursInApps: 20,
        countTasks: 20,
        countDaysOnTask: 10,
        lastUpGradeDate: '2023-11-23 23:46:51.000000',
        countWorkYearInCompany: 4,
        countCall: 38,
        callDuration: 300,
        countWorkHours: 60,
        countWorkHoursOver: 5,
        countDaysSickTime: 5,
        countMissDeadline: 4,
        countOutstandingTask: 2,
      },
      {
        countMessage: 20,
        countCharInMessage: 1000,
        countCommits: 4,
        countChangedCode: 250,
        countHoursInApps: 28,
        countTasks: 12,
        countDaysOnTask: 9,
        lastUpGradeDate: '2023-07-18 11:00:00.000000',
        countWorkYearInCompany: 2,
        countCall: 18,
        callDuration: 250,
        countWorkHours: 36,
        countWorkHoursOver: 6,
        countDaysSickTime: 1,
        countMissDeadline: 1,
        countOutstandingTask: 2,
      },
    ].map((item) => {
      return {
        ...item,
        projectId: projects[Math.floor(Math.random() * projects.length)].id,
        employeeId: employees[Math.floor(Math.random() * employees.length)].id,
      };
    });

    for (const stat of statisticDataset) {
      await queryRunner.query(`
      INSERT INTO statistic ("employeeId", "projectId", "countMessage", "countCharInMessage", "countCommits", 
        "countChangedCode", "countHoursInApps", "countTasks", "countDaysOnTask", "lastUpGradeDate",
        "countWorkYearInCompany", "countCall", "callDuration", "countWorkHours", "countWorkHoursOver",
        "countDaysSickTime", "countMissDeadline", "countOutstandingTask")
      VALUES 
        (${stat.employeeId}, ${stat.projectId}, ${stat.countMessage}, ${stat.countCharInMessage}, ${stat.countCommits}, ${stat.countChangedCode}, ${stat.countHoursInApps}, ${stat.countTasks}, ${stat.countDaysOnTask}, '${stat.lastUpGradeDate}',
${stat.countWorkYearInCompany}, ${stat.countCall}, ${stat.callDuration}, ${stat.countWorkHours}, ${stat.countWorkHoursOver}, ${stat.countDaysSickTime}, ${stat.countMissDeadline}, ${stat.countOutstandingTask});
    `);
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DELETE FROM statistic;');
    await queryRunner.query('DELETE FROM project;');
    await queryRunner.query('DELETE FROM employee;');
  }
}
