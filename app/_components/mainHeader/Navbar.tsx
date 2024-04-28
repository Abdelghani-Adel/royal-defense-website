"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav>
      <ul className="navList">
        <li className={`navItem ${pathname === "/" ? "active" : ""}`}>
          <Link className="navLink" aria-current="page" href="/">
            Home
          </Link>
        </li>

        <li className={`navItem ${pathname === "/solutions" ? "active" : ""}`}>
          <Link className="navLink" aria-current="page" href="/solutions">
            Solutions
          </Link>
        </li>

        <li className={`navItem ${pathname === "/software" ? "active" : ""}`}>
          <Link className="navLink" aria-current="page" href="/software">
            Software
          </Link>
        </li>

        {/* <li className={`navItem ${pathname === "/services" ? "active" : ""}`}>
          <Link className="navLink" aria-current="page" href="/services">
            Services
          </Link>
        </li>

        <li className={`navItem ${pathname === "/catalogue" ? "active" : ""}`}>
          <Link className="navLink" aria-current="page" href="/catalogue">
            E-Catalogue
          </Link>
        </li> */}

        <li className={`navItem ${pathname === "/about-us" ? "active" : ""}`}>
          <Link className="navLink" aria-current="page" href="/about-us">
            About Us
          </Link>
        </li>

        <li className={`navItem ${pathname === "/contact" ? "active" : ""}`}>
          <Link className="navLink" aria-current="page" href="/contact">
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
