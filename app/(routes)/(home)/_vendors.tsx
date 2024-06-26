import CarouselSlider from "@/app/_components/ui/CarouselSlider";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import { v4 } from "uuid";

const settings = {
  dots: true,
  autoplay: true,
  autoplaySpeed: 3000,
  infinite: true,
  slidesToShow: 4,
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
};

const images = [
  "/images/vendors/1.jpeg",
  "/images/vendors/2.jpeg",
  "/images/vendors/3.jpeg",
  "/images/vendors/4.jpeg",
  "/images/vendors/5.jpeg",
  "/images/vendors/6.jpeg",
];

const Vendors = () => {
  return (
    <div className="ourVendors">
      <h2
        className="textSecondary fw-bolder text-center mb-3"
        data-aos="fade-up"
        data-aos-offset={100}
      >
        Our Key Clients
      </h2>

      <div className="vendorCarousel">
        <CarouselSlider>
          {images.map((image, i) => (
            <div
              className="vendorSlice"
              key={v4()}
              data-aos="fade-up"
              data-aos-delay={(i + 1) * 100}
              data-aos-offset={100}
            >
              <div className="vendorSlice_inner">
                <div className="vendorSlice_image">
                  <Image fill src={image} alt="" />
                </div>
              </div>
            </div>
          ))}
        </CarouselSlider>
      </div>
    </div>
  );
};

export default Vendors;
