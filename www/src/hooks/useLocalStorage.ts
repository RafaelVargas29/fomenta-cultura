import { useState, useEffect } from "react";

export function useLocalStorage(key: string, value?: string) {
  const [state, setState] = useState(() => {
    const storage = localStorage.getItem(key);
    if (storage) {
      return JSON.parse(storage);
    } else {
      return value;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return { state, setState };
}
