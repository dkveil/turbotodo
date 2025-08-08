import { z } from "zod";

export const todosSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string().optional(),
  completed: z.boolean(),
  createdAt: z.string(),
  dueDate: z.string().optional(),
  updatedAt: z.string(),
  priority: z.enum(['low', 'medium', 'high']).optional(),
});

export const createTodoSchema = todosSchema.omit({ id: true, createdAt: true });

export const updateTodoSchema = createTodoSchema.partial();

export type Todos = z.infer<typeof todosSchema>;
export type CreateTodoInput = z.infer<typeof createTodoSchema>;
export type UpdateTodoInput = z.infer<typeof updateTodoSchema>;
