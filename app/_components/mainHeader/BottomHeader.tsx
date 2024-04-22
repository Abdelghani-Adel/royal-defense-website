import Image from "next/image";
import React, { useState } from "react";
import Navbar from "./Navbar";
import HeaderActions from "./HeaderActions";
import MobileMenu from "./MobileMenu";
import BtnTogglerArrowLeft from "../ui/BtnTogglerArrowLeft";

const BottomHeader = () => {
  const [mobileMenuShown, setMobileMenuShown] = useState(false);

  const toggleMobileMenu = () => setMobileMenuShown((prev) => !prev);
  const closeMobileMenu = () => setMobileMenuShown(false);

  return (
    <div className="bottomHeader">
      <div className="headerLogo">
        <Image fill src="/images/logo.png" alt="Logo" />
      </div>

      <div className="d-none d-lg-block">
        <Navbar />
      </div>

      <div className="d-none d-lg-block ms-auto">
        <HeaderActions />
      </div>

      <div className="d-lg-none ms-auto">
        <MobileMenu isShown={mobileMenuShown} closeMenu={closeMobileMenu} />
        <BtnTogglerArrowLeft onClick={toggleMobileMenu} />
      </div>
    </div>
  );
};

export default BottomHeader;
