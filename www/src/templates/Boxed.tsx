import { ReactNode } from "react";

interface WrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export default function Wrapper(props: WrapperProps) {
  return (
    <div
      id={props.id ?? ""}
      className={`
          flex-center w-full
          ${props.className ?? ""}
      `}
    >
      <div
        className={`
              px-7 lg:px-0 
              w-full lg:w-[1100px]
          `}
      >
        {props.children}
      </div>
    </div>
  );
}
