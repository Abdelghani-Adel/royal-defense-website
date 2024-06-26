import MyCard from "@/app/_components/_common/MyCard";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const AboutUs = () => {
  return (
    <div className="row">
      <div className="d-none d-md-block col-md-6">
        <div className="home_AboutImage" data-aos="fade-right">
          <Image src="/images/integratedSolutions.png" fill alt="" />
        </div>
      </div>

      <div className="col-12 col-md-6">
        <div className="home_aboutCaptions">
          <h6 className="textPrimary" data-aos="fade-left">
            ABOUT ROYAL DEFENSE
          </h6>

          <div>
            <h2
              className="textSecondary fs-1 fw-bolder"
              data-aos="fade-left"
              data-aos-delay={100}
            >
              Integrated solutions for,
            </h2>
            <h2
              className="textPrimary fs-1 fw-bolder"
              data-aos="fade-left"
              data-aos-delay={150}
            >
              Future Possibilities.
            </h2>
          </div>

          <div>
            <p className="fw-normal" data-aos="fade-left" data-aos-delay={200}>
              Royal Defense's purpose is to empower businesses and organizations
              with innovative technology solutions that drive growth and
              efficiency.
            </p>
            <p className="fw-normal" data-aos="fade-left" data-aos-delay={250}>
              we deliver seamless, customized security and automation systems to
              help our customers thrive in today's digital world.{" "}
            </p>
            <p className="fw-normal" data-aos="fade-left" data-aos-delay={300}>
              We are thrilled to welcome you to Royal Defense, where excellence
              in technology meets dedication to our clients. Together, let's
              embark on a journey towards enhanced security, efficiency, and
              success
            </p>
          </div>

          <button
            className="rdBtn mainBtn"
            data-aos="fade-left"
            data-aos-delay={350}
          >
            <Link href="/about-us">More About Royal Defense</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
