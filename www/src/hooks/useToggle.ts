import { useEffect, useState } from "react";
export function useToggle(stateInitial = false) {
  const [toggle, setToggle] = useState<boolean>(stateInitial);
  function handleToggle() {
    setToggle((prev) => !prev);
  }
  useEffect(() => {
    return () => handleToggle();
  }, []);
  return { toggle, handleToggle };
}
