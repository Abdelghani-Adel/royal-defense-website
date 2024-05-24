import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="/" className="headerLogo">
      <Image fill src="/images/headerLogo.png" alt="Logo" />
    </Link>
  );
};

export default Logo;
