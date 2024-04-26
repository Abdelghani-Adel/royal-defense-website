import React from "react";
import ContactForm from "./_contactForm";
import PageStripe from "@/app/_components/_common/PageStripe";

const Page = () => {
  return (
    <>
      <PageStripe title="Send us a message" />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6">
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
