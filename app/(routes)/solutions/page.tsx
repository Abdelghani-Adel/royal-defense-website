import LetsConnect from "@/app/_components/_common/LetsConnect";
import PageStripe from "@/app/_components/_common/PageStripe";
import React from "react";
import SolutionsCardList from "./_solutionsCardList";

const Page = () => {
  return (
    <div className="pb-5">
      <PageStripe title="Solutions" />
      <div className="container">
        <div className="mb-3">
          <SolutionsCardList />
        </div>
      </div>
    </div>
  );
};

export default Page;
