import { StrictMode } from "react"
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import './index.css'
import App from "./App";
import CartComponent from "./components/Cart/Cart";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import ClothesStore from "./components/ClothesStore/ClothesStore";
import ErrorPage from "./components/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {index: true, element: <ClothesStore/>},
      {path: "cart", element:<CartComponent/>}
    ],
    errorElement: <ErrorPage />,
  },
 
  {
    path: "/clothe/:clotheId",
    element: <ProductDetails/>,
  
  }
 
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);