import { createBrowserRouter } from "react-router-dom";
import CodeReview from "./pages/CodeReview";
import Home from "./pages/Home";
import Error from "./pages/Error";
import App from "./App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/code-review", element: <CodeReview /> },
      { path: "*", element: <Error /> },
    ],
  },
]);
