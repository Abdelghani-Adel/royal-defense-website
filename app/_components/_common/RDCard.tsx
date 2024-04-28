import Image from "next/image";
import Link from "next/link";
import React from "react";

type props = {
  data: ISolutionCardData;
  btnTitle?: string;
};

const RDCard = (props: props) => {
  const { img, title, desc, urlTarget } = props.data;
  const { btnTitle } = props;

  return (
    <div className="RDCard">
      <div className="RDCard_image">
        <Image src={img} fill alt="" />
      </div>
      <h5 className="textPrimary text-center">{title}</h5>
      <p className="fw-light">{desc}</p>
      <button className="rdBtn mainBtn smBtn w-100">
        <Link href={urlTarget}>{btnTitle || "DISCOVER MORE"}</Link>
      </button>
    </div>
  );
};

export default RDCard;
