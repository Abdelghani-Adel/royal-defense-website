"use client";
import React from "react";
import Slider from "react-slick";
import SolutionCard from "./_solutionCard";
import { v4 } from "uuid";
import solutions from "@/public/data/solutions.json";

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
  return (
    <div className="row g-4">
      {solutions.map((card, i) => (
        <div key={v4()} className="col-12 col-md-4">
          <SolutionCard data={card} />
        </div>
      ))}
    </div>
  );
};

export default SolutionsCardList;
