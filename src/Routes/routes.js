import React from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  createBrowserRouter,
} from "react-router-dom";
import UserDashboard from "../Components/Pages/UserDashboard";
import SignIn from "../Components/Pages/SignIn";
import Singup from "../Components/Pages/Singup";
import Main from "../Main/Main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <UserDashboard></UserDashboard>,
      },
    ],
  },
]);
