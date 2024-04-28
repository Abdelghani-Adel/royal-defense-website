"use client";
import AboutUs from "./_aboutUs";
import HeroSlider from "./_heroSlider";
import LetsConnect from "../../_components/_common/LetsConnect";
import SolutionsCardList from "./_solutionsCardList";
import Vendors from "./_vendors";
import SoftwareCardsList from "./_softwareCardsList";

export default function Home() {
  return (
    <div className="mt-3 mb-3">
      <HeroSlider />

      <div className="container section">
        <section className="section">
          <AboutUs />
        </section>

        <section className="section">
          <Vendors />
        </section>
      </div>

      <div className="section bgPrimary solutionsSection">
        <div className="container">
          <h1
            className="text-center text-white mb-4"
            data-aos="fade-up"
            data-aos-offset={100}
          >
            Solutions & Technologies
          </h1>
          <SolutionsCardList />
        </div>
      </div>

      <div className="section">
        <div className="container">
          <h1
            className="text-center mb-4"
            data-aos="fade-up"
            data-aos-offset={100}
          >
            Software Solutions
          </h1>
          <SoftwareCardsList />
        </div>
      </div>

      <div className="section">
        <div className="container">
          <LetsConnect />
        </div>
      </div>
    </div>
  );
}
