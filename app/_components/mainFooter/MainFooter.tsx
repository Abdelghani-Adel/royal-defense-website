"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { HiOutlineMail } from "react-icons/hi";

const MainFooter = () => {
  const pathname = usePathname();

  if (pathname == "/lpr-test") return null;

  return (
    <div className="mainFooter">
      <div className="container-fluid">
        <div className="row g-4">
          <div className="col-12 col-md-2 position-relative">
            <div className="d-none d-md-block footer_iconWrapper">
              <Image src="/images/logo.png" fill alt="" />
            </div>
          </div>

          <div className="col-12 col-md-3">
            <h5 className="mb-3">CUSTOMER SUPPORT</h5>
            <p className="fw-light">+01153588887</p>
            <p className="fw-light">info@royaldefense.cloud</p>
          </div>

          <div className="col-12 col-md-3">
            <h5 className="mb-3">Royal Defense</h5>
            <ul className="fotter_ul">
              <li>
                <Link href="/lpr-test" className="mainFooter_link">
                  Discover our solutions
                </Link>
              </li>
              <li>
                <Link href="/lpr-test" className="mainFooter_link">
                  Test our api
                </Link>
              </li>

              <li>
                <Link href="/about" className="mainFooter_link">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/about?section=ourTeam" className="mainFooter_link">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/contact" className="mainFooter_link">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* <div className="col-12 col-md-4">
            <div className="d-flex align-items-center gap-2 mb-3">
              <HiOutlineMail className="display-2" />
              <div>
                <h5>Subscribe to our news letter</h5>
                <p className="fw-light">
                  Sign up and we Will send the Lest deals to you
                </p>
              </div>
            </div>

            <div className="d-flex gap-3 mb-3">
              <input
                type="email"
                className="form-control form-control-sm"
                placeholder="ENTER YOUR EMAIL"
              ></input>
              <button className="rdBtn mainBtn smBtn">SUBSCRIBE</button>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default MainFooter;
