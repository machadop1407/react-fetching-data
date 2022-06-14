import React, { Suspense } from "react";
import { QueryClientProvider, QueryClient } from "react-query";
import Dog1 from "../helper-components/Dog1";
import Dog2 from "../helper-components/Dog2";

function ReactQuery() {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        suspense: true,
      },
    },
  });

  return (
    <QueryClientProvider client={client}>
      <Suspense fallback={<h1> Loading...</h1>}>
        <Dog1 />
        <Dog2 />
      </Suspense>
    </QueryClientProvider>
  );
}

export default ReactQuery;
