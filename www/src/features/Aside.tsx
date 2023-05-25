import { FiPower } from "react-icons/fi";
import { Navbar } from "../components/Navbar";
import { Divider } from "../components/Divider";
import { Logo } from "../components/Logo";

export function Asidebar() {
  return (
    <aside className="sidebar">
      <section>
        <div className="overflow-hidden">
          <Logo alt />
        </div>
        <Divider />
        <h3 className="text-sm mb-6">Menu</h3>
        <Navbar />
      </section>
      <div className="">
        <a href="/logout" className="sidebar-link" title="sair">
          <FiPower className="icon" />
          <span className="sidebar-text">Sair</span>
        </a>
      </div>
    </aside>
  );
}
