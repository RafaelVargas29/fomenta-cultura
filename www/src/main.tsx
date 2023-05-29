import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Auth/Login";
import { Register } from "./pages/Auth/Register";
import { Dashboard } from "./pages/Dashboard";
import { Activities } from "./pages/Activities";
import { CreateActivity } from "./pages/Activities/New";
import { PrivateRoute } from "./layouts/PrivateRoute";

import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="auth">
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/activities">
          <Route path="new" element={<CreateActivity />} />
          <Route path="all" element={<Activities />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
