import { FiPower } from "react-icons/fi";
import { Navbar } from "../components/Navbar";
import { Divider } from "../components/Divider";

export function Asidebar() {
  return (
    <aside className="sidebar bg-gradient-custom">
      <section className="">
        <h2 className="sidebar-title">Fomenta Cultura</h2>
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
