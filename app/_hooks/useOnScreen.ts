import { RefObject, useEffect, useState } from "react";

export default function useOnScreen(ref: RefObject<HTMLElement>) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = ref.current;
      if (!element) return;

      const viewportHeight = window.innerHeight;
      const topThreshold = viewportHeight * 0.1;
      const bottomThreshold = viewportHeight * 0.6;

      const boundingClientRect = element.getBoundingClientRect();
      const elementTop = boundingClientRect.top;

      // Calculate if the top edge of the element is within the middle 50% of the viewport
      const isInMiddle50Percent = elementTop > topThreshold && elementTop < bottomThreshold;

      setIntersecting(isInMiddle50Percent);
    };

    handleScroll(); // Check initially

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [ref]);

  return isIntersecting;
}
