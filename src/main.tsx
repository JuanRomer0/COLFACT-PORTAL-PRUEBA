import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./api/queryClient";
import { worker } from "./mocks/browser";

async function enableMocking() {
  await worker.start({
    onUnhandledRequest(req) {
  const url = new URL(req.url);

  if (!url.pathname.startsWith("/api")) {
    return;
  }

  console.warn("Unhandled API request:", url.href);
},
  });
}

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </React.StrictMode>
  );
});