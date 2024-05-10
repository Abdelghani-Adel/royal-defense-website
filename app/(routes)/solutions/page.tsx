import PageStripe from "@/app/_components/_common/PageStripe";
import React from "react";
import SolutionsCardList from "./_solutionsCardList";

const Page = () => {
  return (
    <div>
      <PageStripe title="Solutions" />
      <SolutionsCardList />
    </div>
  );
};

export default Page;
