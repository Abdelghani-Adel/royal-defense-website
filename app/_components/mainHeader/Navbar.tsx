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

        <li className={`navItem ${pathname === "/about" ? "active" : ""}`}>
          <Link className="navLink" aria-current="page" href="/">
            About Us
          </Link>
        </li>

        <li className={`navItem ${pathname === "/solutions" ? "active" : ""}`}>
          <Link className="navLink" aria-current="page" href="/">
            Solutions
          </Link>
        </li>

        <li className={`navItem ${pathname === "/solutions" ? "active" : ""}`}>
          <Link className="navLink" aria-current="page" href="/">
            Software
          </Link>
        </li>

        <li className={`navItem ${pathname === "/solutions" ? "active" : ""}`}>
          <Link className="navLink" aria-current="page" href="/">
            Services
          </Link>
        </li>

        <li className={`navItem ${pathname === "/solutions" ? "active" : ""}`}>
          <Link className="navLink" aria-current="page" href="/">
            E-Catalogue
          </Link>
        </li>

        <li className={`navItem ${pathname === "/contact" ? "active" : ""}`}>
          <Link className="navLink" aria-current="page" href="/">
            Careers
          </Link>
        </li>

        <li className={`navItem ${pathname === "/contact" ? "active" : ""}`}>
          <Link className="navLink" aria-current="page" href="/">
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
