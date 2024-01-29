import { useEffect, useState } from "react";

export const useActiveScroll = () => {
  const [menuId, setMenuId] = useState<string>("home");

  useEffect(() => {
    let mounted = true;

    const sectionAll = document.querySelectorAll("section[id]");

    const onScroll = () => {
      if (mounted) {
        sectionAll.forEach((current) => {
          const sectionY = current.getBoundingClientRect();

          if (sectionY.top - 300 <= 0) {
            const sectionId = current.getAttribute("id");

            if (sectionId != null) {
              setMenuId(sectionId);
            }
          }
        });
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => {
      mounted = false;
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return {
    menuId,
  };
};
