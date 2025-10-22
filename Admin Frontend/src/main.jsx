import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import RootLayout from "./RootLayout.jsx";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <App /> },
      {
        path: "/notifications",
        element: <h1>This is the notification page</h1>,
      },
      { path: "/products", element: <h1>This is the product page</h1> },
      {
        path: "/create-product",
        element: <h1>This is the product create page</h1>,
      },
      { path: "/orders", element: <h1>This is the orders page</h1> },
      {
        path: "/create-order",
        element: <h1>This is the order create page</h1>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
