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
      className={`shadow-xl hover:shadow rounded-lg px-8 pt-6 pb-4 cursor-pointer ${
        className ?? ""
      }`}
    >
      <header className="flex-between">
        <span className="text-xl font-medium capitalize">{title}</span>
        {React.cloneElement(icon, {
          className: "icon"
        })}
      </header>
      <strong className="mt-3 block text-4xl">{qtdActivities}</strong>
    </div>
  );
}
