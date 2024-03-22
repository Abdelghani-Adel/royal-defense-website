"use client";

import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";

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
  }, []);
  return <>{children}</>;
};

export default Providers;
