import { ReactNode } from "react";

interface SummaryContainerProps {
  children: ReactNode;
  className?: string;
}

export function SummaryContainer({
  children,
  className
}: SummaryContainerProps) {
  return <section className={`${className ?? ""}`}>{children}</section>;
}
