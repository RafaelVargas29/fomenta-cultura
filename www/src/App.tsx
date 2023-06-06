import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Auth/Login";
import { Register } from "./pages/Auth/Register";
import { NotFound } from "./pages/NotFound";
import { CreateActivity } from "./pages/Organizations/Activities/CreateActivity";
import { RequireAuth } from "./pages/RequireAuth";
import { Dashboard } from "./pages/Organizations/Dashboard";
import { ListallActivity } from "./pages/Organizations/Activities/ListallActivity";
import { EditActivity } from "./pages/Organizations/Activities/EditActivity";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="forgot-password" element={<div>esqueci a senha</div>} />

        <Route path="/">
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="activities">
            <Route index element={<ListallActivity />} />
            <Route path="new" element={<CreateActivity />} />
            <Route path="edit/:id" element={<EditActivity />} />
          </Route>
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
