import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import RootLayout from "./RootLayout.jsx";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { Notifications } from "./pages/Notifications";
import Products from "./pages/Product/Products.jsx";
import Orders from "./pages/order/Orders.jsx";
import CreateOrder from "./pages/order/CreateOrder.jsx";
import CreateProduct  from "./pages/Product/CreateProduct.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import MyProfile from "./pages/profile/MyProfile.jsx";
import Logout from "./pages/profile/Logout.jsx";
import Login from "./pages/profile/Login.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Dashboard /> },
      {
        path: "/notifications",
        element: <Notifications />,
      },
      { path: "/products", element: <Products /> },
      {
        path: "/create-product",
        element: <CreateProduct />,
      },
      { path: "/orders", element: <Orders /> },
      {
        path: "/create-order",
        element: <CreateOrder />,
      },
      {
        path: "/my-profile",
        element: <MyProfile />,
      },
      {
        path: "/logout",
        element: <Logout />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
