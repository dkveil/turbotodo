import { Input, Mutation, Query, Router } from "nestjs-trpc";
import { TodosService } from "./todos.service";
import z from "zod";
import { CreateTodoInput, UpdateTodoInput, createTodoSchema, todosSchema, updateTodoSchema } from "./schema";

@Router({ alias: 'todo'})
export class TodosRouter {
  constructor(private readonly todosService: TodosService) {}

  @Query({
    input: z.object({
      id: z.string(),
    }),
    output: todosSchema,
  })
  getTodoById(@Input('id') id: string) {
    return this.todosService.findOne(id);
  }

  @Query({
    output: z.array(todosSchema),
  })
  getTodos() {
    return this.todosService.findAll();
  }

  @Mutation({
    input: createTodoSchema,
    output: todosSchema,
  })
  createTodo(@Input() input: CreateTodoInput) {
    return this.todosService.create(input);
  }

  @Mutation({
    input: z.object({
      id: z.string(),
      data: updateTodoSchema,
    }),
    output: todosSchema,
  })
  updateTodo(@Input() input: { id: string, data: UpdateTodoInput }) {
    return this.todosService.update(input.id, input.data);
  }

  @Mutation({
    input: z.object({
      id: z.string(),
    }),
    output: z.boolean(),
  })
  deleteTodo(@Input('id') id: string) {
    return this.todosService.remove(id);
  }
}