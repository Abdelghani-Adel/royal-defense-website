import useOnScreen from "@/app/_hooks/useOnScreen";
import Image from "next/image";
import React, { useRef } from "react";

const ScrollableContent = (props: IScrollableContentProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref);

  return (
    <div ref={ref} className={`scrollableContent ${isVisible ? "active" : ""}`}>
      <div className="captions">
        <h1>{props.data.title}</h1>
        <h3>{props.data.smallTitle}</h3>
        <p>{props.data.description}</p>
      </div>
      <div className="lprContent_image">
        <Image fill src={props.data.image} alt="" />
      </div>
    </div>
  );
};

export default ScrollableContent;
