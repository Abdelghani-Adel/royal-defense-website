import LetsConnect from "@/app/_components/_common/LetsConnect";
import PageStripe from "@/app/_components/_common/PageStripe";
import React from "react";
import CardsList from "./_cardsList";

const Page = () => {
  return (
    <div className="pb-5">
      <PageStripe title="Solutions" />
      <div className="container">
        <div className="mb-3">
          <CardsList />
        </div>
        <LetsConnect />
      </div>
    </div>
  );
};

export default Page;
