import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import RootLayout from "./RootLayout.jsx";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { Notifications } from "./pages/Notifications";
import Products from "./pages/product/Products.jsx";
import Orders from "./pages/order/Orders.jsx";
import CreateOrder from "./pages/order/CreateOrder.jsx";
import CreateProduct from "./pages/product/CreateProduct.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import MyProfile from "./pages/profile/MyProfile.jsx";
import Logout from "./pages/profile/Logout.jsx";
import Login from "./pages/profile/Login.jsx";
import ProductSettings from "./pages/product/ProductSettings.jsx";
import Category from "./pages/product/product settings/Category.jsx";
import Colors from "./pages/product/product settings/Colors";
import Sizes from "./pages/product/product settings/Sizes";
import FormModal from "./modals/FormModal.jsx";
import Allusers from "./pages/users/Allusers.jsx";

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
      {
        path: "/modal",
        element: <FormModal />,
      },
      { path: "/products", element: <Products /> },
      {
        path: "/create-product",
        element: <CreateProduct />,
      },
      {
        path: "/product-settings",
        element: <ProductSettings />,
        children: [
          { index: true, element: <Category /> }, // Default tab
          { path: "category", element: <Category /> },
          { path: "color", element: <Colors /> },
          { path: "size", element: <Sizes /> },
        ],
      },
      { path: "/orders", element: <Orders /> },
      { path: "/users", element: <Allusers /> },
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
