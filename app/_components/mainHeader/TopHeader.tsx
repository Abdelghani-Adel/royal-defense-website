import React from "react";
import { RiFacebookFill, RiLinkedinFill } from "react-icons/ri";

const TopHeader = () => {
  return (
    <div className="topHeader">
      <div className="topHeader-group">
        <p className="topHeader-groupItem">info@royal-defense.cloud</p>
        <p className="topHeader-groupItem">01153588887</p>
      </div>

      <div className="topHeader-group gap-2">
        <p>
          <RiFacebookFill />
        </p>
        <p>
          <RiLinkedinFill />
        </p>
      </div>
    </div>
  );
};

export default TopHeader;
