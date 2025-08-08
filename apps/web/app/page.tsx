'use client';

import { trpc } from "@repo/trpc/client";

export default function Home() {
  const { data, isLoading } = trpc.todo.getTodos.useQuery();

  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      {data?.map((todo: any) => (
        <div key={todo.id}>
          <h1>{todo.title}</h1>
          <p>{todo.description}</p>
        </div>
      ))}
    </>
  );
}
