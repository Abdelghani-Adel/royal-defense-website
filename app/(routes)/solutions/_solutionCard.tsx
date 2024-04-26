import MyModal from "@/app/_components/_common/MyModal";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SolutionCard = ({ data }: { data: ISolutionCardData }) => {
  const { img, title, desc, urlTarget } = data;

  return (
    <>
      <div className="solutionCard">
        <div className="solutionCard_image">
          <Image src={img} fill alt="" />
        </div>
        <h5 className="textPrimary text-center">{title}</h5>
        <p className="fw-light">{desc}</p>
        <button className="rdBtn mainBtn smBtn w-100">Read MORE</button>
      </div>
      <MyModal show={false} onClose={() => {}}>
        <h1>test</h1>
      </MyModal>
    </>
  );
};

export default SolutionCard;
