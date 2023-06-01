import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Auth/Login";
import { Register } from "./pages/Auth/Register";
import { Dashboard } from "./pages/Organizations/Dashboard";
import { CreateActivity } from "./pages/Organizations/Activities/CreateActivity";
import { ListallActivity } from "./pages/Organizations/Activities/ListallActivity";
import { EditActivity } from "./pages/Organizations/Activities/EditActivity";
import { FeedActivities } from "./pages/FeedActivities";
import { ActivitiesProvider } from "./store/context/ActivitiesContext";
import "./assets/styles/index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ActivitiesProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="feed" element={<FeedActivities />} />
          {/* private routes */}
          <Route path="/">
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/activities">
              <Route path="new" element={<CreateActivity />} />
              <Route path="all" element={<ListallActivity />} />
              <Route path="edit/:id" element={<EditActivity />} />
            </Route>
          </Route>
          <Route path="*" element={<div>404</div>} />
        </Routes>
      </BrowserRouter>
    </ActivitiesProvider>
  </React.StrictMode>
);
