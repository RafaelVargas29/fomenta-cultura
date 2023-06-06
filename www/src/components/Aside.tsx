import { FiPower } from "react-icons/fi";
import { Navbar } from "../components/Navbar";
import { Logo } from "../components/Logo";

interface AsideProps {
  logout: () => void;
}

export function Asidebar({ logout }: AsideProps) {
  return (
    <aside className="relative space-y-12 h-[87vh] w-[60px] p-8 flex-column bg-solid-alt lg:w-[220px]">
      <Logo />
      <Navbar />
      <div
        title="sair"
        className="absolute bottom-10 sidebar-link cursor-pointer"
        onClick={() => logout()}
      >
        <FiPower className="icon" />
        <span className="sidebar-text">Sair</span>
      </div>
    </aside>
  );
}
