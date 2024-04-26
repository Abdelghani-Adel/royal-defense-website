import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <div className="headerLogo">
      <Image fill src="/images/logo.png" alt="Logo" />
    </div>
  );
};

export default Logo;
