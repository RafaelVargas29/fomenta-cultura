import { FiChevronLeft, FiChevronRight, FiPower } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { BiHome, BiPlusCircle, BiUser } from "react-icons/bi";
import { GiBugleCall } from "react-icons/gi";
import { useContextSelector } from "use-context-selector";
import { AuthContext } from "../store/context/AuthContext";
import { useEffect, useState } from "react";

export function Asidebar() {
  const [toggle, setToggle] = useState<boolean>(true);
  const navgative = useNavigate();
  const { logout } = useContextSelector(AuthContext, (context) => {
    return {
      logout: context.logout
    };
  });
  function handleLogout() {
    logout();
    navgative("/");
  }
  function action() {
    setToggle((prev) => !prev);
  }
  useEffect(() => {
    action();
  }, []);
  return (
    <aside className="relative">
      <nav
        className={`h-[100vh] p-8 space-y-6 flex-column bg-secondary ${
          toggle ? "w-[30px]" : "w-full"
        }`}
      >
        <Link
          to={"/dashboard"}
          className={`${
            toggle ? "sidebar-link" : "sidebar-link justify-start"
          }`}
          title="Início"
        >
          <BiHome className="icon" />
          <span
            className={`${
              toggle ? "invisible h-0 w-0 hidden" : "visible h-auto w-auto"
            }`}
          >
            Início
          </span>
        </Link>

        <Link
          to={"/activities/new"}
          title="Criar Atividade"
          className={`${
            toggle ? "sidebar-link" : "sidebar-link justify-start"
          }`}
        >
          <BiPlusCircle className="icon" />
          <span
            className={`${
              toggle ? "invisible h-0 w-0 hidden" : "visible h-auto w-auto"
            }`}
          >
            Criar Atividade
          </span>
        </Link>

        <Link
          to={"/activities"}
          title="Atividade"
          className={`${
            toggle ? "sidebar-link" : "sidebar-link justify-start"
          }`}
        >
          <GiBugleCall className="icon" />
          <span
            className={`${
              toggle ? "invisible h-0 w-0 hidden" : "visible h-auto w-auto"
            }`}
          >
            Atividades
          </span>
        </Link>
        <Link
          to={"/profile"}
          title="Profile"
          className={`${
            toggle ? "sidebar-link" : "sidebar-link justify-start"
          }`}
        >
          <BiUser className="icon" />
          <span
            className={`${
              toggle ? "invisible h-0 w-0 hidden" : "visible h-auto w-auto"
            }`}
          >
            Profile
          </span>
        </Link>
        <div
          title="sair"
          onClick={() => handleLogout()}
          className={`cursor-pointer ${
            toggle ? "sidebar-link" : "sidebar-link justify-start"
          }`}
        >
          <FiPower className="icon" />
          <span
            className={`${
              toggle ? "invisible h-0 w-0 hidden" : "visible h-auto w-auto"
            }`}
          >
            Sair
          </span>
        </div>
      </nav>

      <div
        title="recolher"
        className={`absolute bottom-32  sidebar-link cursor-pointer w-full flex items-end justify-end
        ${
          toggle
            ? "right-4 transition-all duration-300"
            : "right-10 transition-all duration-300"
        }`}
        onClick={() => action()}
      >
        {toggle ? <FiChevronRight size={26} /> : <FiChevronLeft size={26} />}
      </div>
    </aside>
  );
}
