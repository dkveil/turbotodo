import { Module } from '@nestjs/common';
import { TodosService } from './todos.service';
import { TodosController } from './todos.controller';
import { TodosRouter } from './todos.router';

@Module({
  controllers: [TodosController],
  providers: [TodosService, TodosRouter],
})
export class TodosModule {}
