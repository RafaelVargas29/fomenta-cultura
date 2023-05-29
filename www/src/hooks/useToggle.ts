import { useState } from "react";

export function useToggle(stateInitial = false) {
  const [open, setOpen] = useState<boolean>(stateInitial);

  function handleToggle() {
    setOpen(!open);
    console.log(open);
  }

  return { open, handleToggle };
}
