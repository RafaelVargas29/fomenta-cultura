import { useState } from "react";
export function useToggle(stateInitial = false) {
  const [open, setOpen] = useState<boolean>(stateInitial);
  function handleToggle() {
    setOpen((prev) => !prev);
  }
  return { open, handleToggle };
}
