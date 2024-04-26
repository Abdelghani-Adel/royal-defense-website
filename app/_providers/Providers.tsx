"use client";

import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@/app/_styles/main.css";

/**
 * This component is resbonsible for all processes needs to be invoked at the loading stage.
 * It import and provides all css files and redux store to the rest of the application.
 */

const Providers = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  useEffect(() => {
    // Initialize the animation library configuration
    Aos.init({
      offset: 0,
      duration: 600,
      easing: "ease-in-out",
    });

    // Imoprt the bootstrap js files
    if (typeof document !== "undefined") {
      //@ts-ignore
      import("jquery");
      import("popper.js");
      //@ts-ignore
      import("bootstrap/dist/js/bootstrap.bundle.min");
    }
  });
  return <>{children}</>;
};

export default Providers;
