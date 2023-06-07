import { ReactNode } from "react";

interface WrapperGridProps {
  children: ReactNode;
  id?: string;
}

export function WrapperGrid(props: WrapperGridProps) {
  return (
    <div id={props.id ?? ""} className={`grid-flow-container `}>
      {props.children}
    </div>
  );
}
