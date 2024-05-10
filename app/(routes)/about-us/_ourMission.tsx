import Image from "next/image";
import React from "react";

const OurMission = () => {
  return (
    <div className="d-flex gap-4">
      <div>
        <h2>Our Mission</h2>
        <p>
          Royal Defense provides innovative technology solutions to empower businesses to thrive in
          the digital era. With a commitment to cutting-edge solutions, seamless integration, and
          unparalleled customer service, we enable organizations to drive efficiency, productivity
          and growth. Our team of experts leads the market by delivering customized solutions
          tailored to each client's unique needs. We pride ourselves on technical excellence,
          honesty and ethics to ensure complete customer satisfaction.
        </p>
      </div>

      <div className="aboutusPic">
        <Image src="/images/mission.jpeg" fill alt="" />
      </div>
    </div>
  );
};

export default OurMission;
