import Image from "next/image";
import Link from "next/link";
import React from "react";
import Slider from "react-slick";

//@ts-ignore
import Typewriter from "typewriter-effect";

const settings = {
  dots: false,
  autoplay: true,
  autoplaySpeed: 3000,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const HeroSlider = () => {
  // new Typewriter("#typewriter", {
  //   strings: ["Next-Level Solutions Powered by Cutting-Edge Technologies"],
  //   autoStart: true,
  //   skipAddStyles: true,
  // });

  return (
    <div className="heroSlider_wrapper">
      <div className="heroSlider_captions">
        <h1
          data-aos="fade-up"
          data-aos-once
          id="typewriter"
          className="text-white"
        >
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString(
                  "Next-Level Solutions Powered by Cutting-Edge Technologies.",
                )
                .start();
            }}
          />
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
          <Link href="/contact">Get in touch</Link>
        </button>
      </div>

      <div className="heroSlider_slice">
        <Image fill src="/images/heroslider/heroImage.png" alt="" />
      </div>

      {/* <Slider {...settings}>
        <div className="heroSlider_slice">
          <Image fill src="/images/heroslider/2.jpg" alt="" />
        </div>
      </Slider> */}
    </div>
  );
};

export default HeroSlider;
