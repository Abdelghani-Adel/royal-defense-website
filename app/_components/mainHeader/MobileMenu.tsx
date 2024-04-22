import React from "react";
import Navbar from "./Navbar";
import BtnMenuCloseX from "../ui/BtnMenuCloseX";

type props = {
  isShown: boolean;
  closeMenu: () => void;
};

const MobileMenu = (props: props) => {
  const { isShown, closeMenu } = props;
  return (
    <div className={`mobileMenu ${isShown ? "shown" : ""}`}>
      <div className="mobileMenu_header">
        {/* <Logo /> */}
        <h6>logo</h6>
        <BtnMenuCloseX onClick={closeMenu} />
      </div>

      <Navbar />

      <div className="mobileMenu_footer"></div>
    </div>
  );
};

export default MobileMenu;
