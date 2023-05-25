import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface SummaryCardProps {
  children: ReactNode;
  url: string;
  name: string;
  className?: string;
}

export function SummaryCard({
  children,
  name,
  url,
  className
}: SummaryCardProps) {
  return (
    <Link
      to={url}
      title={name}
      className={`shadow-xl hover:shadow rounded-md p-8 cursor-pointer ${
        className ?? ""
      }`}
    >
      {children}
    </Link>
  );
}
