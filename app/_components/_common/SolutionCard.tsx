import Image from "next/image";
import React from "react";

type props = {
  data: ISolutionCardData;
  onClick: () => void;
};

const SolutionCard = (props: props) => {
  const { img, title, desc } = props.data;
  const { onClick } = props;

  return (
    <div className="solutionCard">
      <div className="solutionCard_image">
        <Image src={img} fill alt="" />
      </div>
      <h5 className="textPrimary text-center">{title}</h5>
      <p className="fw-light">{desc}</p>
      <button className="rdBtn mainBtn smBtn w-100" onClick={onClick}>
        DISCOVER MORE
      </button>
    </div>
  );
};

export default SolutionCard;
