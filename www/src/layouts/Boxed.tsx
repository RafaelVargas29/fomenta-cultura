import { ReactNode } from "react";

interface BoxedProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export default function Boxed(props: BoxedProps) {
  return (
    <div
      id={props.id ?? ""}
      className={`
          flex justify-center w-full
          ${props.className ?? ""}
      `}
    >
      <div
        className={`
              px-7 xl:px-0 
              w-full xl:w-[1100px]
          `}
      >
        {props.children}
      </div>
    </div>
  );
}
