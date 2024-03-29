import Image from "next/image";
import React from "react";
import Slider from "react-slick";

const settings = {
  dots: false,
  autoplay: true,
  autoplaySpeed: 3000,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const HeroSlider = () => {
  return (
    <div className="heroSlider_wrapper">
      <div className="heroSlider_captions">
        <h1 data-aos="fade-up" data-aos-once>
          <span className="text-white">Next-Level Solutions </span>{" "}
          <span className="textPrimary">
            Powered by Cutting-Edge Technologies
          </span>
        </h1>
        <p
          className="fw-normal"
          data-aos="fade-up"
          data-aos-delay={100}
          data-aos-once
          data-aos-offset={-150}
        >
          <span className="textPrimary fw-bold">Royal Defense </span>
          <span className="text-white">
            provides best-in-class security management solutions.
          </span>
        </p>

        <button
          className="heroSlider_btn"
          data-aos="fade-up"
          data-aos-delay={200}
          data-aos-once
          data-aos-offset={-150}
        >
          Get in touch
        </button>
      </div>

      <Slider {...settings}>
        <div className="heroSlider_slice">
          <Image fill src="/images/heroslider/3.png" alt="" />
        </div>
        <div className="heroSlider_slice">
          <Image fill src="/images/heroslider/2.jpg" alt="" />
        </div>
      </Slider>
    </div>
  );
};

export default HeroSlider;
