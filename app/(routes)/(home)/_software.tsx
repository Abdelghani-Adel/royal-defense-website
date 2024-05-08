import Link from "next/link";
import React from "react";

const Software = () => {
  return (
    <>
      <div className="col-12 col-md-6">
        <h4 className="text-center mb-3">Royal Vision</h4>
        <p className="fw-light mb-2">
          Royal Defense is proud to present Royal Vision, a cutting-edge
          software solution capable of reading Egyptian license plates with
          utmost precision and efficiency.
        </p>
        <p className="fw-light mb-2">
          With Royal Vision, businesses and organizations across various
          industries can experience a new level of convenience and security in
          managing vehicle identification.
        </p>
        <p className="fw-light mb-2">
          Our state-of-the-art software leverages advanced technologies like
          computer vision, machine learning, and optical character recognition
          (OCR) to accurately detect and extract critical information from
          Egyptian license plates. Whether it's for parking management, traffic
          control, law enforcement, or any other application requiring license
          plate recognition, Royal Vision is your ultimate solution.
        </p>
        {/* <button className="heroSlider_btn">
          <Link href="/software">Know more</Link>
        </button> */}
      </div>

      <div className="col-12 col-md-6">
        <h4 className="text-center mb-3">RPM</h4>
        <p className="fw-light mb-2">
          Welcome to the future of parking management – where efficiency meets
          innovation, and convenience intertwines with cutting-edge technology.
        </p>
        <p className="fw-light mb-2">
          Say hello to RPM, your gateway to a smarter, more streamlined parking
          experience. Whether you're a parking facility owner aiming to boost
          revenue or a driver tired of the endless search for the perfect spot,
          RPM is here to transform the way we think about parking.
        </p>
        <p className="fw-light mb-2">
          Fasten your seatbelts as we take you on a ride through the world of
          intelligent space allocation, user-friendly interfaces, and a parking
          revolution like never before.
        </p>
      </div>
    </>
  );
};

export default Software;
