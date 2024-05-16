"use client";
import React, { useEffect } from "react";
import Slider from "react-slick";
import { v4 } from "uuid";
import solutions from "@/public/data/solutions.json";
import RDCard from "@/app/_components/_common/RDCard";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

const settings = {
  dots: false,
  // autoplay: true,
  autoplaySpeed: 10000,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const SolutionsCardList = () => {
  const params = useSearchParams();

  useEffect(() => {
    if (params) {
      params.forEach((param) => {
        const sectionElement = document.getElementById(param);
        if (sectionElement) {
          sectionElement.scrollIntoView({ behavior: "smooth" });
        }
      });
    }
  }, [params]);

  return (
    <>
      {solutions.technological.map((card, i) => (
        <div
          id={card.id}
          className={`solutionCard ${i % 2 != 0 ? "bg" : ""}`}
          key={v4()}
        >
          <span className="category">Technological</span>
          <div>
            <h2 className="mb-3">{card.title}</h2>
            <p className="fw-light">{card.desc}</p>
          </div>

          <div>
            <div className="solutionCard_img">
              <Image src={card.img} fill alt="" />
            </div>
          </div>
        </div>
      ))}

      {solutions.law.map((card, i) => (
        <div
          id={card.id}
          className={`solutionCard ${i % 2 == 0 ? "bg" : ""}`}
          key={v4()}
        >
          <span className="category">Law Enforcement</span>
          <div>
            <h2 className="mb-3">{card.title}</h2>
            <p className="fw-light">{card.desc}</p>
          </div>

          <div>
            <div className="solutionCard_img">
              <Image src={card.img} fill alt="" />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
export default SolutionsCardList;
