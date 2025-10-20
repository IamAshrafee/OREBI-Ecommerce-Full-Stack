import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import SidebarLayout from "./components/layout/SidebarLayout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SidebarLayout />,
    children: [
      { path: "products/summary", element: <div>Product Summary Page</div> },
      { path: "products/create", element: <div>Create Product Page</div> },
      { path: "products", element: <div>All Products Page</div> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
