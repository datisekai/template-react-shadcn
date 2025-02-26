import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import router from "./routes/index.tsx";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import I18nProvider from "./translation/I18nProvider.tsx";
const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <I18nProvider>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <Toaster position="top-right" containerStyle={{ zIndex: 99999 }} />
    </QueryClientProvider>
  </I18nProvider>
);
