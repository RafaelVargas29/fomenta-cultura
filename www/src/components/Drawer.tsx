import { ReactNode } from "react";

interface DrawerProps {
  children: ReactNode;
  className?: string;
}

export function Drawer({ children, className }: DrawerProps) {
  return (
    <div className={`w-full h-screen absolute z-20 ${className ?? ""}`}>
      {children}
    </div>
  );
}
