import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "./utils/i18n.js";
import FunctionProvider from "./utils/FunctionProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FunctionProvider>
      <App />
    </FunctionProvider>
  </StrictMode>
);
