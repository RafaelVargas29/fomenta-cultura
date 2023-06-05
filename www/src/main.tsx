import ReactDOM from "react-dom/client";
import { ToastContainer } from "react-toastify";
import "./styles/index.css";
import "react-toastify/dist/ReactToastify.min.css";
import { AuthProvider } from "./store/context/AuthContext";
import { App } from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <>
    <AuthProvider>
      <App />
      <ToastContainer />
    </AuthProvider>
  </>
);
