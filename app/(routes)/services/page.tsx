import PageStripe from "@/app/_components/_common/PageStripe";
import React from "react";
import ServicesList from "./_servicesList";

const Page = () => {
  return (
    <div>
      <PageStripe title="Services" />
      <ServicesList />
    </div>
  );
};

export default Page;
