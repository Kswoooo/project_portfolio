import { useEffect, useState } from "react";

export const useScroll = () => {
  const [scrollY, setScrollY] = useState<number>(0);

  useEffect(() => {
    let mounted = true;

    const onScroll = () => {
      if (mounted) {
        setScrollY(window.scrollY);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => {
      mounted = false;
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return {
    scrollY,
  };
};