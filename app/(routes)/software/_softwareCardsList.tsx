"use client";
import React from "react";
import { v4 } from "uuid";
import software from "@/public/data/software.json";
import RDCard from "@/app/_components/_common/RDCard";

const SoftwareCardsList = () => {
  return (
    <div className="row g-4">
      {software.map((card, i) => (
        <div key={v4()} className="col-12 col-md-4">
          <RDCard data={card} />
        </div>
      ))}
    </div>
  );
};

export default SoftwareCardsList;
