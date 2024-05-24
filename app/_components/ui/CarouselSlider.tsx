import React from "react";
import Slider from "react-slick";

const settings = {
  dots: false,
  autoplay: true,
  autoplaySpeed: 10000,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 2,
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
  // nextArrow: <SampleNextArrow />,
  // prevArrow: <SamplePrevArrow />,
};

const CarouselSlider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <Slider {...settings}>{children}</Slider>;
};

export default CarouselSlider;

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <button
      className={className}
      style={{ ...style, display: "block", color: "green" }}
      onClick={onClick}
    >
      prev
    </button>
  );
}
