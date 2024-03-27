import Image from "next/image";
import React from "react";

const SolutionCard = () => {
  return (
    <div className="solutionCard">
      <div className="solutionCard_image">
        <Image src="/images/solutionscards/camera2.webp" fill alt="" />
      </div>

      <h5 className="textPrimary text-center">Video Surveillance systems</h5>

      <p className="fw-light">
        Our wealth of experience encompasses the design and integration of
        highly advanced and intelligent video surveillance systems.
      </p>

      <button className="rdBtn mainBtn smBtn w-100">DISCOVER MORE</button>
    </div>
  );
};

export default SolutionCard;
