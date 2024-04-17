import { RefObject, useEffect, useState } from "react";

export default function useOnScreen(ref: RefObject<HTMLElement>) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = ref.current;
      if (!element) return;

      const viewportHeight = window.innerHeight;
      const topThreshold = viewportHeight * 0.8; // Top 30% of viewport

      const boundingClientRect = element.getBoundingClientRect();
      const elementTop = boundingClientRect.top;
      const elementBottom = boundingClientRect.bottom;

      const isInTop30Percent =
        elementTop >= 0 && elementTop < topThreshold && elementBottom > 0;

      setIntersecting(isInTop30Percent);
    };

    handleScroll(); // Check initially

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [ref]);

  return isIntersecting;
}
