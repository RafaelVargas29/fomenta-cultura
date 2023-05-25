import { ReactNode } from "react";
import { Asidebar } from "../features/Aside";
import { Header } from "../features/Header";

interface ViewContainerProps {
  children: ReactNode;
  className?: string;
}

export default function ViewContainer({
  children,
  className
}: ViewContainerProps) {
  return (
    <div className={`min-h-screen flex`}>
      <Asidebar />
      <div className="flex-1 overflow-scroll no-scrollbar">
        <Header />
        <main className={`p-8 ${className ?? ""}`}>{children}</main>
      </div>
    </div>
  );
}
