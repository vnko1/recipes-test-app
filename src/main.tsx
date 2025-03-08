import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ApiProvider } from "@reduxjs/toolkit/query/react";

import { recipesApi } from "./redux";
import { App } from "./containers";
import "./styles/index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ApiProvider api={recipesApi}>
      <App />
    </ApiProvider>
  </StrictMode>
);
