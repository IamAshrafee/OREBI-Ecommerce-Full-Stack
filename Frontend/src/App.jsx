import React from "react";
import Home from "./pages/Home";
import Shop from "./pages/shop/Shop";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RootLayout from "./layout/RootLayout";
import NotFound from "./pages/NotFound";
import Login from "./pages/account/Login";
import SecondRootLayout from "./layout/SecondRootLayout";
import Signup from "./pages/account/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "shop", element: <Shop /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "*", element: <NotFound /> },
    ],
  },
  {
    path: "/",
    element: <SecondRootLayout />,
    children: [
      { path: "login", element: <Login /> },
      { path: "signup", element: <Signup /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
