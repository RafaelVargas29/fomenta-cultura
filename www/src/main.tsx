import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Auth/Login";
import { Register } from "./pages/Auth/Register";
import { Dashboard } from "./pages/Organizations/Dashboard";
import { CreateActivity } from "./pages/Organizations/Activities/CreateActivity";
import { ListallActivity } from "./pages/Organizations/Activities/ListallActivity";
import { EditActivity } from "./pages/Organizations/Activities/EditActivity";
import "./assets/styles/index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />

        <Route path="/">
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/activities">
            <Route path="new" element={<CreateActivity />} />
            <Route path="all" element={<ListallActivity />} />
            <Route path="edit/:id" element={<EditActivity />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
