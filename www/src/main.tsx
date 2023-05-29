import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Auth/Login";
import { Register } from "./pages/Auth/Register";
import { Dashboard } from "./pages/Dashboard";

import "./styles/index.css";
import { CreateActivity } from "./pages/Activities/CreateActivity";
import { ListallActivity } from "./pages/Activities/ListallActivity";
import { Events } from "./pages/Eventos";
import { PrivateRoute } from "./layouts/PrivateRoute";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="eventos" element={<Events />} />

        <Route path="/">
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/activities">
            <Route path="new" element={<CreateActivity />} />
            <Route path="all" element={<ListallActivity />} />
            <Route path="edit/:id" element={<div>esditar</div>} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
