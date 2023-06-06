import ReactDOM from "react-dom/client";
import { AuthProvider } from "./store/context/AuthContext";
import { ActivitiesProvider } from "./store/context/ActivitiesContext";
import { App } from "./App";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <>
    <AuthProvider>
      <ActivitiesProvider>
        <App />
      </ActivitiesProvider>
    </AuthProvider>
    <ToastContainer />
  </>
);
