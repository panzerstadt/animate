import React, { useState, useEffect } from "react";

// mouse and touch as hover
const useHover = ref => {
  const [hovered, setHovered] = useState(false);
  const handleHoverIn = () => {
    setHovered(true);
  };

  const handleHoverOut = () => {
    setHovered(false);
  };

  useEffect(() => {
    const el = ref.current;
    el.addEventListener("mouseenter", handleHoverIn, { passive: true });
    el.addEventListener("mouseleave", handleHoverOut, { passive: true });
    el.addEventListener("touchstart", handleHoverIn);
    el.addEventListener("touchend", handleHoverOut);

    return () => {
      const el = ref.current;
      el.removeEventListener("mouseenter", handleHoverIn, { passive: true });
      el.removeEventListener("mouseleave", handleHoverOut, { passive: true });
      el.removeEventListener("touchstart", handleHoverIn);
      el.removeEventListener("touchend", handleHoverOut);
    };
  }, [ref]);

  return hovered;
};

export default useHover;
