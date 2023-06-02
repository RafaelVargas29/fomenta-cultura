/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

interface SummaryCardProps {
  title: string;
  className?: string;
  icon: any;
  qtdActivities: number;
  action: (title: string) => void;
}

export function SummaryCard({
  title,
  action,
  icon,
  qtdActivities,
  className
}: SummaryCardProps) {
  return (
    <div
      onClick={() => action(title)}
      title={title}
      className={`shadow-xl hover:shadow rounded-lg p-8 cursor-pointer ${
        className ?? ""
      }`}
    >
      <header className="flex-between">
        <span className="text-xl font-medium capitalize">{title}</span>
        {React.cloneElement(icon, {
          className: "icon"
        })}
      </header>
      <strong className="block mt-4 text-4xl">{qtdActivities}</strong>
    </div>
  );
}
