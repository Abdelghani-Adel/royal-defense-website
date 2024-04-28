import React from "react";
import Navbar from "./Navbar";
import BtnMenuCloseX from "../ui/BtnMenuCloseX";
import Logo from "./Logo";
import HeaderActions from "./HeaderActions";

type props = {
  isShown: boolean;
  closeMenu: () => void;
};

const MobileMenu = (props: props) => {
  const { isShown, closeMenu } = props;

  return (
    <div className={`mobileMenu ${isShown ? "shown" : ""}`}>
      <div className="mobileMenu_header">
        <Logo />
        <BtnMenuCloseX onClick={closeMenu} />
      </div>

      <div onClick={closeMenu}>
        <Navbar />
      </div>

      <div className="mobileMenu_footer" onClick={closeMenu}>
        <HeaderActions />
      </div>
    </div>
  );
};

export default MobileMenu;
