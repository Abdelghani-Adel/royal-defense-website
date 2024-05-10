import Image from "next/image";
import React from "react";

const OurVision = () => {
  return (
    <div className="d-flex gap-4">
      <div>
        <h2>Our Vision</h2>
        <p>
          Royal Defense's vision is to be the trusted technology partner that empowers businesses
          and organizations to reach their full potential. By delivering innovative, integrated
          solutions, we aim to transform industries and enable our clients to thrive in the digital
          world. Our goal is to have a meaningful impact that drives progress, efficiency and
          sustainable growth for all.
        </p>
      </div>

      <div className="aboutusPic">
        <Image src="/images/ourMission.jpg" fill alt="" />
      </div>
    </div>
  );
};

export default OurVision;
