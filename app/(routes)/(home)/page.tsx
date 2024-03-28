"use client";
import AboutUs from "./_aboutUs";
import HeroSlider from "./_heroSlider";
import LetsConnect from "./_letsConnect";
import SolutionsCardList from "./_solutionsCardList";
import Vendors from "./_vendors";

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
          <h1 className="text-center text-white mb-4">
            Solutions & Technologies
          </h1>
          <SolutionsCardList />
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
