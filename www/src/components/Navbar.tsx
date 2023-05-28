import { Link } from "react-router-dom";
import { BiHome, BiPlusCircle } from "react-icons/bi";
import { GiBugleCall } from "react-icons/gi";

export function Navbar() {
  return (
    <nav className="space-y-5">
      <Link to={"/dashboard"} className="sidebar-link" title="Início">
        <BiHome className="icon" />
        <span className="sidebar-text">Início</span>
      </Link>

      <Link
        to={"/activities/new"}
        title="Criar Atividade"
        className="sidebar-link"
      >
        <BiPlusCircle className="icon" />
        <span className="sidebar-text">Criar Atividade</span>
      </Link>

      <Link to={"/activities"} title="Criar Atividade" className="sidebar-link">
        <GiBugleCall className="icon" />
        <span className="sidebar-text">Atividades</span>
      </Link>
    </nav>
  );
}
