import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todos, CreateTodoInput, UpdateTodoInput } from './schema';

@Injectable()
export class TodosService {
  private todos: Todos[] = [];

  create(createTodoDto: CreateTodoInput) {
    const todo: Todos = {
      id: Math.random().toString(),
      title: createTodoDto.title,
      description: createTodoDto.description,
      completed: createTodoDto.completed,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    this.todos.push(todo);
    return todo;
  }

  findAll() {
    return this.todos;
  }

  findOne(id: string) {
    const todo = this.todos.find((todo) => todo.id === id);
    if (!todo) {
      throw new Error('Todo not found');
    }
    return todo;
  }

  update(id: string, updateTodoDto: UpdateTodoInput) {
    const todo = this.todos.find((todo) => todo.id === id);
    if (!todo) {
      throw new Error('Todo not found');
    }
    todo.title = updateTodoDto.title;
    todo.description = updateTodoDto.description;
    return todo;
  }

  remove(id: string) {
    const idx = this.todos.findIndex((todo) => todo.id === id);
    if (idx === -1) {
      throw new Error('Todo not found');
    }
    this.todos.splice(idx, 1);
    return true;
  }
}
