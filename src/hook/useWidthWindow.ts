import { useEffect, useState } from "react";

export function useWidthWindow() {
  const [size, setSize] = useState(7);

  useEffect(() => {
    function update() {
      const w = window.innerWidth;

      if (w < 400) setSize(2);
      else if (w < 1024) setSize(4);
      else setSize(7);
    }

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return size;
}