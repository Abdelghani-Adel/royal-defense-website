import React from "react";
import ContactForm from "./_contactForm";
import PageStripe from "@/app/_components/_common/PageStripe";
import { FaPhone } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";

const Page = () => {
  return (
    <>
      {/* <PageStripe title="Send us a message" /> */}
      <div className="container py-5">
        <div className="row justify-content-center g-3">
          <h1 className="text-center mb-4 fw-normal">CONTACT US</h1>
          <div className="col-12 col-md-8 col-lg-5">
            <h2 className="text-center mb-4 fw-light">ONLINE INQUERY</h2>
            <ContactForm />
          </div>

          <div className="col-12 col-lg-7 text-center">
            <h2 className="text-center mb-4 fw-light">CONTACT DETAILS</h2>

            <h4 className="fw-light mb-3">
              <strong>
                <MdOutlineMailOutline />{" "}
              </strong>
              info@royal-defense.com
            </h4>
            <h4 className="fw-light mb-3">
              <strong>
                <FaPhone />{" "}
              </strong>
              +201101005678
            </h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
