import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

// Router
import { router } from "./routers.jsx";
import { RouterProvider } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
