"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="navigation">
      <ul className="navList">
        <li className={`navItem ${pathname === "/" ? "active" : ""}`}>
          <Link className="navLink" aria-current="page" href="/">
            Home
          </Link>
        </li>

        <li className={`navItem ${pathname === "/about" ? "active" : ""}`}>
          <Link className="navLink" aria-current="page" href="/">
            About
          </Link>
        </li>

        <li className={`navItem ${pathname === "/industries" ? "active" : ""}`}>
          <Link className="navLink" aria-current="page" href="/">
            Industries
          </Link>
        </li>

        <li className={`navItem ${pathname === "/solutions" ? "active" : ""}`}>
          <Link className="navLink" aria-current="page" href="/">
            Solutions & Technologies
          </Link>
        </li>

        <li className={`navItem ${pathname === "/services" ? "active" : ""}`}>
          <Link className="navLink" aria-current="page" href="/">
            Services & support
          </Link>
        </li>

        <li className={`navItem ${pathname === "/partners" ? "active" : ""}`}>
          <Link className="navLink" aria-current="page" href="/">
            Partners
          </Link>
        </li>

        <li className={`navItem ${pathname === "/contact" ? "active" : ""}`}>
          <Link className="navLink" aria-current="page" href="/">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
