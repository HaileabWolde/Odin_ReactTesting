import { StrictMode } from "react"
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import './index.css'
import App from "./App";
import ErrorPage from "./components/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
 
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);