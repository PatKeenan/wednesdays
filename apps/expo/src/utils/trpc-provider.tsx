import * as React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { httpBatchLink, loggerLink } from "@trpc/client";
import { createTRPCReact } from "@trpc/react-query";
import superjson from "superjson";

import { AppRouter } from "server/src/routes/_app";

import { getBaseUrl } from "./get-base-url";

export const api = createTRPCReact<AppRouter>();
export { type RouterOutputs, type RouterInputs } from "server/src/routes/_app";

export function TRPCProvider(props: { children: React.ReactNode }) {
  const [queryClient] = React.useState(() => new QueryClient());
  const [trpcClient] = React.useState(() =>
    api.createClient({
      links: [
        loggerLink({
          enabled: (opts) =>
            process.env.NODE_ENV === "development" ||
            (opts.direction === "down" && opts.result instanceof Error),
          colorMode: "ansi",
        }),
        httpBatchLink({
          transformer: superjson,
          url: `${getBaseUrl()}/trpc`,
          headers() {
            const headers = new Map<string, string>();
            headers.set("x-trpc-source", "expo-react");

            /*  const token = getToken(); */
            const token = "t";
            if (token) headers.set("Authorization", `Bearer ${token}`);

            return Object.fromEntries(headers);
          },
        }),
      ],
    })
  );

  return (
    <api.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        {props.children}
      </QueryClientProvider>
    </api.Provider>
  );
}
