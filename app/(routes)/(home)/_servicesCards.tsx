import React from "react";
import services from "@/public/data/services.json";
import Slider from "react-slick";
import { v4 } from "uuid";
import MyCard from "@/app/_components/_common/MyCard";

const settings = {
  dots: false,
  autoplay: true,
  autoplaySpeed: 5000,
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

const ServicesCards = () => {
  return (
    <Slider {...settings}>
      {services.map((card, i) => (
        <div
          key={v4()}
          data-aos="fade-up"
          data-aos-delay={(i + 1) * 100}
          data-aos-offset={100}
        >
          <div className="py-4">
            <MyCard
              title={card.title}
              image={card.img}
              text={card.desc}
              urlTarget="/lpr-test"
              targetBlank
            />
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default ServicesCards;
