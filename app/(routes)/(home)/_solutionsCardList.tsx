import React from "react";
import Slider from "react-slick";
import SolutionCard from "./_solutionCard";
import { v4 } from "uuid";

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
    <Slider {...settings}>
      {cards.map((card, i) => (
        <div key={v4()} data-aos="fade-up" data-aos-delay={(i + 1) * 100} data-aos-offset={100}>
          <SolutionCard data={card} />
        </div>
      ))}
    </Slider>
  );
};

export default SolutionsCardList;

const cards: ISolutionCardData[] = [
  {
    img: "/icons/cctv.png",
    title: "Video Surveillance systems",
    desc: "Our wealth of experience encompasses the design and integration of highly advanced and intelligent video surveillance systems.",
    urlTarget: "/solutions",
  },
  {
    img: "/icons/gate.png",
    title: "Access Control Systems",
    desc: "Our wealth of experience encompasses the design and integration of highly advanced and intelligent video surveillance systems.",
    urlTarget: "/solutions",
  },
  {
    img: "/icons/sensor.png",
    title: "vehicles Identification System",
    desc: "Our wealth of experience encompasses the design and integration of highly advanced and intelligent video surveillance systems.",
    urlTarget: "/solutions",
  },
  {
    img: "/icons/gate.png",
    title: "Gate Barrier",
    desc: "Our wealth of experience encompasses the design and integration of highly advanced and intelligent video surveillance systems.",
    urlTarget: "/solutions",
  },
  {
    img: "/icons/gate.png",
    title: "Pedestrian Entrance Gates",
    desc: "Our wealth of experience encompasses the design and integration of highly advanced and intelligent video surveillance systems.",
    urlTarget: "/solutions",
  },
  {
    img: "/images/solutionscards/camera2.webp",
    title: "Address & Sound Systems",
    desc: "Our wealth of experience encompasses the design and integration of highly advanced and intelligent video surveillance systems.",
    urlTarget: "/solutions",
  },
];
