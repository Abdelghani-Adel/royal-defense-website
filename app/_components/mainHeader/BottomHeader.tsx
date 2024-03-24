import Image from "next/image";
import React from "react";
import Navbar from "./Navbar";
import HeaderActions from "./HeaderActions";

const BottomHeader = () => {
  return (
    <div className="bottomHeader">
      <div className="headerLogo">
        <Image fill src="/images/logo.png" alt="Logo" />
      </div>

      <Navbar />

      <div className="ms-auto">
        <HeaderActions />
      </div>
    </div>
  );
};

export default BottomHeader;
