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
  slidesToScroll: 1,
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
      <h2 className="textSecondary fw-bolder text-center mb-3">
        Our Vendor Partners
      </h2>

      <Slider {...settings} className="vendorCarousel">
        {images.map((image) => (
          <div className="vendorSlice" key={v4()}>
            <div className="vendorSlice_inner">
              <div className="vendorSlice_image">
                <Image fill src={image} alt="" />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Vendors;
