import Image from "next/image";
import React from "react";

const OurStory = () => {
  return (
    <div className="d-flex gap-4">
      <div className="aboutusPic">
        <Image src="/images/story.jpg" fill alt="" />
      </div>

      <div>
        <h2>Our Story</h2>
        <p>
          Royal Defense began as a startup focused on providing security
          solutions to local businesses. As technology advanced, we saw an
          opportunity to evolve into so much more.
        </p>
        <p>
          We embarked on a journey to become a one-stop shop for light current
          solutions, leveraging innovation to meet our clients' needs. Through
          our talented team's commitment to understanding each customer's unique
          challenges, we design tailored solutions that integrate seamlessly
          into their operations.
        </p>
        <p>
          Today, Royal Defense has grown into a trusted partner for
          organizations of all sizes looking to transform their infrastructure.
          Our unique approach combines cutting-edge products with
          service-focused project management. We don't just install and
          integrate pieces of technology - we craft complete solutions that
          empower our clients.
        </p>
        <p>
          At the core is our relentless commitment to being at the forefront of
          light current innovations. We continuously expand our capabilities to
          provide the most advanced options to customers. Yet we never lose
          sight of the human element - building relationships and truly
          partnering with our clients.
        </p>
      </div>
    </div>
  );
};

export default OurStory;
