import { ReactNode } from "react";
import { Asidebar } from "../features/Aside";
import { BiMenuAltLeft } from "react-icons/bi";
import { Welcome } from "./Welcome";

import dayjs from "dayjs";
import ptBr from "dayjs/locale/pt-br";
import { useToggle } from "../hooks/useToggle";
dayjs.locale(ptBr);

interface ViewContainerProps {
  children: ReactNode;
  className?: string;
}

export default function ViewContainer({
  children,
  className
}: ViewContainerProps) {
  const { handleToggle, open } = useToggle(true);
  return (
    <div className={`min-h-screen`}>
      <header className="h-24 bg-white shadow rounded-sm px-8 flex items-center justify-between">
        <div className="flex items-center gap-10">
          <button onClick={handleToggle} title="menu">
            <BiMenuAltLeft className="icon" />
          </button>
          <Welcome />
        </div>
        <strong>{dayjs().format("DD[/]MM[/]YYYY")}</strong>
      </header>

      <div className="flex overflow-scroll no-scrollbar">
        {open && <Asidebar />}
        <main className={`flex-1 ${className ?? ""}`}>{children}</main>
      </div>
    </div>
  );
}
