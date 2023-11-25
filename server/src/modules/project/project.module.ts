import { Module } from '@nestjs/common';
import { Project } from '../db/entities/project.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Project])],
})
export class ProjectModule {}
