import { ReactNode } from "react";
import { useContextSelector } from "use-context-selector";

import { Logo } from "../components/Logo";
import { Avatar } from "../components/Avatar";
import { Asidebar } from "../components/Aside";
import { AuthContext } from "../store/context/AuthContext";

interface ViewContainerProps {
  children: ReactNode;
  className?: string;
}

export default function ViewContainer({
  children,
  className
}: ViewContainerProps) {
  const userActive = useContextSelector(AuthContext, (context) => context.user);
  return (
    <>
      <header className="fixed-element h-24 bg-secondary shadow-lg flex-between px-4 lg:px-14">
        <nav className="flex-between w-full lg:w-[1100px] m-auto">
          <Logo />
          {userActive && (
            <Avatar
              url={userActive?.imageUrl}
              alt={userActive?.name}
              height={64}
              width={64}
              hasBorder
            />
          )}
        </nav>
      </header>
      <div className="mt-24 flex overflow-scroll no-scrollbar">
        <Asidebar />
        <main className={`flex-1 ${className ?? ""}`}>{children}</main>
      </div>
    </>
  );
}
