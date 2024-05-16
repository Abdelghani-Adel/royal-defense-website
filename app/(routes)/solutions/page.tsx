import PageStripe from "@/app/_components/_common/PageStripe";
import React, { Suspense } from "react";
import SolutionsCardList from "./_solutionsCardList";

const Page = () => {
  return (
    <div>
      <PageStripe title="Solutions" />
      <Suspense>
        <SolutionsCardList />
      </Suspense>
    </div>
  );
};

export default Page;
