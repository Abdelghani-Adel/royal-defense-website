"use client";
import React from "react";
import { v4 } from "uuid";
import solutions from "@/public/data/services.json";
import Image from "next/image";

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

const ServicesList = () => {
  return solutions.map((card, i) => (
    <div className={`solutionCard ${i % 2 != 0 ? "bg" : ""}`} key={v4()}>
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
  ));
};

export default ServicesList;
