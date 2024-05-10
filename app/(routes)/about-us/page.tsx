"use client";
import PageStripe from "@/app/_components/_common/PageStripe";
import React from "react";
import OurStory from "./_ourStory";
import OurMission from "./_ourMission";
import OurVision from "./_ourVision";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const Page = () => {
  return (
    <div className="aboutUs">
      <PageStripe title="About Royal Defense" />
      <div className="container">
        <div className="d-flex gap-5 flex-column">
          <OurStory />
          <OurMission />
          <OurVision />
        </div>
      </div>
    </div>
  );
};

export default Page;
