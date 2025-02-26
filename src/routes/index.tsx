import { pathNames } from "@/constants";
import AuthLayout from "@/layouts/AuthLayout";
import DefaultLayout from "@/layouts/DefaultLayout";
import MainLayout from "@/layouts/MainLayout";
import HomePage from "@/pages/Home";
import LoginPage from "@/pages/Login";
import RegisterPage from "@/pages/Register";
import { createBrowserRouter, redirect, RouteObject } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: pathNames.HOME,
    element: <DefaultLayout />,
    children: [
      {
        path: pathNames.LOGIN,
        element: <LoginPage />,
      },
      {
        path: pathNames.REGISTER,
        element: <RegisterPage />,
      },
      {
        path: pathNames.HOME,
        element: <MainLayout />,
        children: [
          {
            path: pathNames.HOME,
            element: <HomePage />,
          },
        ],
      },
    ],
  },
  { path: "*", loader: () => redirect(pathNames.HOME) },
] as RouteObject[]);

export default router;
