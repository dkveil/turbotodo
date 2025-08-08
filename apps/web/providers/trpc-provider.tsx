"use client";

import { PropsWithChildren } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { trpc, queryClient, trpcClient } from "@repo/trpc/client";

export default function TRPCProvider({ children }: PropsWithChildren) {

  return (
    <QueryClientProvider client={queryClient}>
      <trpc.Provider client={trpcClient} queryClient={queryClient}>
        {children}
      </trpc.Provider>
    </QueryClientProvider>
  );
}