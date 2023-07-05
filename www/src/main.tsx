import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { Login } from "./pages/Auth/Login";
import { Register } from "./pages/Auth/Register";
import { Feed } from "./pages/Feed";
import { Home } from "./pages/Home";
import { CreateActivity } from "./pages/Organizations/Activities/CreateActivity";
import { EditActivity } from "./pages/Organizations/Activities/EditActivity";
import { ListallActivity } from "./pages/Organizations/Activities/ListallActivity";
import { Dashboard } from "./pages/Organizations/Dashboard";
import { ActivitiesProvider } from "./store/context/ActivitiesContext";
import { AuthProvider } from "./store/context/AuthContext";
import "./styles/index.css";

import Details from "./pages/Details";
import { NotFound } from "./pages/NotFound";
import { EditProfile } from "./pages/Profile/EditProfile";
import { Profile } from "./pages/Profile/Profile";
import { RequireAuth } from "./pages/RequireAuth";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <AuthProvider>
    <ActivitiesProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />

          <Route path="feed">
            <Route index element={<Feed />} />
            <Route path="details/:id" element={<Details />} />
          </Route>

          <Route path="/" element={<RequireAuth />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="activities">
              <Route index element={<ListallActivity />} />
              <Route path="new" element={<CreateActivity />} />
              <Route path="edit/:id" element={<EditActivity />} />
            </Route>
            <Route path="profile">
              <Route index element={<Profile />} />
              <Route path="edit/:id" element={<EditProfile />} />
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ActivitiesProvider>
    <ToastContainer />
  </AuthProvider>
);
