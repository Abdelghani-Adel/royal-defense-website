import React from "react";
import Slider from "react-slick";
import { v4 } from "uuid";
import solutions from "@/public/data/solutions.json";
import RDCard from "@/app/_components/_common/RDCard";
import MyCard from "@/app/_components/_common/MyCard";

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
      {solutions.technological.map((card, i) => (
        <div
          key={v4()}
          data-aos="fade-up"
          data-aos-delay={(i + 1) * 100}
          data-aos-offset={100}
        >
          {/* <RDCard data={card} /> */}
          <div className="py-4">
            {" "}
            <MyCard
              title={card.title}
              image={card.img}
              text={card.desc}
              urlTarget={card.urlTarget}
            />
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default SolutionsCardList;
