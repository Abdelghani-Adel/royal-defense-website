"use client";
import AboutUs from "./_aboutUs";
import HeroSlider from "./_heroSlider";
import LetsConnect from "../../_components/_common/LetsConnect";
import TechnologicalSolutions from "./_technologicalSolutions";
import Vendors from "./_vendors";
import SoftwareCardsList from "./_softwareCardsList";
import { HiOutlineMail } from "react-icons/hi";
import Software from "./_software";
import ServicesCards from "./_servicesCards";
import LawSolutions from "./_lawSolutions";

export default function Home() {
  return (
    <div className="mt-3 mb-3">
      <HeroSlider />

      <div className="container section">
        <section className="section">
          <AboutUs />
        </section>
      </div>

      <div className="section solutionsSection">
        <div className="container">
          <h1
            className="text-center mb-4"
            data-aos="fade-up"
            data-aos-offset={100}
          >
            Technological solutions
          </h1>
          <TechnologicalSolutions />
        </div>
      </div>

      <div className="section solutionsSection">
        <div className="container">
          <h1
            className="text-center mb-4"
            data-aos="fade-up"
            data-aos-offset={100}
          >
            Law enforcement solutions
          </h1>
          <LawSolutions />
        </div>
      </div>

      <div className="section">
        <div className="container">
          <h2
            className="text-center mb-4"
            data-aos="fade-up"
            data-aos-offset={100}
          >
            Software Solutions
          </h2>
          <div className="row g-5">
            <Software />
          </div>
        </div>
      </div>

      <div className="section solutionsSection">
        <div className="container">
          <h1
            className="text-center mb-4"
            data-aos="fade-up"
            data-aos-offset={100}
          >
            Our Services
          </h1>
          <ServicesCards />
        </div>
      </div>

      <div className="container">
        <section className="section">
          <Vendors />
        </section>
      </div>

      {/* <div className="section">
        <div className="container">
          <h1 className="text-center mb-4" data-aos="fade-up" data-aos-offset={100}>
            Software Solutions
          </h1>
          <SoftwareCardsList />
        </div>
      </div> */}

      <div className="section">
        <div className="container">
          <LetsConnect />
        </div>
      </div>

      <div className="section  bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-6">
              <div className="d-flex align-items-center gap-2 mb-3">
                <HiOutlineMail className="display-2" />
                <div>
                  <h5>Subscribe to our news letter</h5>
                  <p className="fw-light">
                    Sign up and we Will send the Lest deals to you
                  </p>
                </div>
              </div>

              <div className="d-flex gap-3 mb-3">
                <input
                  type="email"
                  className="form-control form-control-sm"
                  placeholder="ENTER YOUR EMAIL"
                ></input>
                <button className="rdBtn mainBtn smBtn">SUBSCRIBE</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
