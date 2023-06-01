import { Link } from "react-router-dom";
import { BiHome, BiPlusCircle, BiUser } from "react-icons/bi";
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

      <Link to={"/activities/all"} title="Atividade" className="sidebar-link">
        <GiBugleCall className="icon" />
        <span className="sidebar-text">Atividades</span>
      </Link>
      <Link to={"/activities/all"} title="Profile" className="sidebar-link">
        <BiUser className="icon" />
        <span className="sidebar-text">Profile</span>
      </Link>
    </nav>
  );
}
