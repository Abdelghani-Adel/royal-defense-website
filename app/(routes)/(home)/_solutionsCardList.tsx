import React from "react";
import Slider from "react-slick";
import SolutionCard from "./_solutionCard";
import { v4 } from "uuid";

const settings = {
  dots: false,
  autoplay: true,
  autoplaySpeed: 10000,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
};

const SolutionsCardList = () => {
  return (
    <Slider {...settings}>
      {cards.map((card) => (
        <div key={v4()}>
          <SolutionCard data={card} />
        </div>
      ))}
    </Slider>
  );
};

export default SolutionsCardList;

const cards: ISolutionCardData[] = [
  {
    img: "/images/solutionscards/camera2.webp",
    title: "Video Surveillance systems",
    desc: "Our wealth of experience encompasses the design and integration of highly advanced and intelligent video surveillance systems.",
    urlTarget: "#",
  },
  {
    img: "/images/solutionscards/camera2.webp",
    title: "Video Surveillance systems",
    desc: "Our wealth of experience encompasses the design and integration of highly advanced and intelligent video surveillance systems.",
    urlTarget: "#",
  },
  {
    img: "/images/solutionscards/camera2.webp",
    title: "Video Surveillance systems",
    desc: "Our wealth of experience encompasses the design and integration of highly advanced and intelligent video surveillance systems.",
    urlTarget: "#",
  },
  {
    img: "/images/solutionscards/camera2.webp",
    title: "Video Surveillance systems",
    desc: "Our wealth of experience encompasses the design and integration of highly advanced and intelligent video surveillance systems.",
    urlTarget: "#",
  },
  {
    img: "/images/solutionscards/camera2.webp",
    title: "Video Surveillance systems",
    desc: "Our wealth of experience encompasses the design and integration of highly advanced and intelligent video surveillance systems.",
    urlTarget: "#",
  },
  {
    img: "/images/solutionscards/camera2.webp",
    title: "Video Surveillance systems",
    desc: "Our wealth of experience encompasses the design and integration of highly advanced and intelligent video surveillance systems.",
    urlTarget: "#",
  },
];
