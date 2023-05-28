import { FiPower } from "react-icons/fi";
import { Navbar } from "../components/Navbar";
import { Logo } from "../components/Logo";

export function Asidebar() {
  return (
    <aside className="sidebar">
      <div className="space-y-12">
        <Logo />
        <Navbar />
      </div>
      <div className="mt-32">
        <a href="/logout" className="sidebar-link" title="sair">
          <FiPower className="icon" />
          <span className="sidebar-text">Sair</span>
        </a>
      </div>
    </aside>
  );
}
