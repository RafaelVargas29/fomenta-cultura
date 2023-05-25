import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/index.css";
import { Home } from "./pages/Home";
import { Auth } from "./pages/Auth";
import { Login } from "./pages/Auth/Login";
import { Register } from "./pages/Auth/Register";
import { Dashboard } from "./pages/Dashboard";
import { NewActivity } from "./pages/Activities/New";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "auth",
    element: <Auth />,
    children: [
      {
        path: "login",
        element: <Login />
      },
      {
        path: "register",
        element: <Register />
      }
    ]
  },
  {
    path: "dashboard",
    element: <Dashboard />
  },
  {
    path: "activities",
    element: <Auth />,
    children: [
      {
        path: "new",
        element: <NewActivity />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
