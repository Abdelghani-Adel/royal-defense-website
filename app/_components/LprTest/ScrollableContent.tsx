import useOnScreen from "@/app/_hooks/useOnScreen";
import React, { useEffect, useRef } from "react";

const LprContentCaptions = (props: IScrollableContentProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref);

  useEffect(() => {
    if (isVisible) {
      props.onActive(props.data.image);
    }
  }, [isVisible]);

  return (
    <div ref={ref} className={`lprContentCaptions ${isVisible ? "active" : ""}`}>
      <h1>{props.data.title}</h1>
      <h3>{props.data.smallTitle}</h3>
      <p>{props.data.description}</p>
    </div>
  );
};

export default LprContentCaptions;
