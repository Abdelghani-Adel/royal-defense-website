import PageStripe from "@/app/_components/_common/PageStripe";
import React from "react";
import SoftwareCardsList from "./_softwareCardsList";

const Page = () => {
  return (
    <div className="pb-5">
      <PageStripe title="Software Solutions" />
      <div className="container">
        <div className="mb-3">
          <SoftwareCardsList />
        </div>
      </div>
    </div>
  );
};

export default Page;
