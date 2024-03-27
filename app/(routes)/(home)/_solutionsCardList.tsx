import React from "react";
import Slider from "react-slick";
import SolutionCard from "./_solutionCard";

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
      <div>
        <SolutionCard />
      </div>
      <div>
        <SolutionCard />
      </div>
      <div>
        <SolutionCard />
      </div>
      <div>
        <SolutionCard />
      </div>
      <div>
        <SolutionCard />
      </div>
    </Slider>
  );
};

export default SolutionsCardList;
