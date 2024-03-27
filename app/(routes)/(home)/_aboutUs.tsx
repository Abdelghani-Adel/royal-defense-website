import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <div className="row">
      <div className="d-none d-md-block col-md-6">
        <div className="home_AboutImage">
          <Image src="/images/aboutSection.png" fill alt="" />
        </div>
      </div>

      <div className="col-12 col-md-6">
        <div className="home_aboutCaptions">
          <h6 className="textPrimary">ABOUT ROYAL DEFENSE</h6>

          <div>
            <h2 className="textSecondary fs-1 fw-bolder">
              Integrated solutions for,
            </h2>
            <h2 className="textPrimary fs-1 fw-bolder">
              Future Possibilities.
            </h2>
          </div>

          <div>
            <p className="fw-normal">
              Royal Defense's purpose is to empower businesses and organizations
              with innovative technology solutions that drive growth and
              efficiency.
            </p>
            <p className="fw-normal">
              we deliver seamless, customized security and automation systems to
              help our customers thrive in today's digital world.{" "}
            </p>
          </div>

          <button className="rdBtn mainBtn">More About Royal Defense</button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
