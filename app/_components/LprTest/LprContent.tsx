import React, { useEffect, useRef, useState } from "react";
import LprContentCaptions from "./ScrollableContent";
import { v4 } from "uuid";
import Image from "next/image";

const LprContent = () => {
  const [image, setImage] = useState<string>(content[0].image);
  const elementRef = useRef<HTMLDivElement>(null); // Specify the type of elementRef
  const [isActive, setIsActive] = useState(false);

  const changeImageHandler = (image: string) => setImage(image);

  useEffect(() => {
    const handleScroll = () => {
      const element = elementRef.current;
      if (!element) return; // Guard clause to handle null or undefined element

      const elementRect = element.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const elementTop = elementRect.top;

      // Calculate the top 20% of the viewport
      const top20Percent = viewportHeight * 0.2;

      // Check if the top edge of the element is within the top 20% of the viewport
      const isTopInView = elementTop < top20Percent;

      setIsActive(isTopInView);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`lprContent ${isActive ? "active" : ""}`} ref={elementRef}>
      <div className="row">
        <div className="col-md-5">
          {content.map((content) => (
            <LprContentCaptions key={v4()} data={content} onActive={changeImageHandler} />
          ))}
        </div>

        <div className="col-md-7">
          <div className="lprContent_image">
            <Image fill src={image} alt="" data-aos="fade" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LprContent;

const content = [
  {
    smallTitle: "Precision Beyong Imperfections",
    title: "Blurry Image Recognition",
    description:
      "Effortlessly handle blurry images, ensuring precise recognition even when image quality is compromised.",
    image: "/images/lprcontent/blurydetection.png",
  },
  {
    smallTitle: "Efficiency in Limited Quality​",
    title: "Low-Resolution Image Handling",
    description:
      "Excels in processing low-resolution images, enabling accurate recognition and efficient data capture even when image quality is limited. ",
    image: "/images/lprcontent/lowresolution.png",
  },
  {
    smallTitle: "Swift Identification on the Go",
    title: "Fast-Moving Vehicle Detection​",
    description: "Ensures precise recognition and rapid identification even at very high speeds.",
    image: "/images/lprcontent/fastmoving.png",
  },
  {
    smallTitle: "Secure in The Dark​​",
    title: "Low-Light Environment Detection​",
    description:
      "Ability to thrive in low-light or dark environments, providing reliable recognition regardless of lighting conditions.",
    image: "/images/lprcontent/lowlight.png",
  },
  {
    smallTitle: "Adaptable to Varied Layouts​",
    title: "Dual Row Plate Recognition",
    description:
      "Accurately recognizes license plates displayed in two rows and caters to diverse plate layouts",
    image: "/images/lprcontent/angle.png",
  },
  {
    smallTitle: "Accurate at Any Plate Position​​",
    title: "Angle-Defying Recognition​",
    description:
      "Defies plate orientation challenges, delivering accurate recognition even when plates are at odd angles.",
    image: "/images/lprcontent/blurydetection.png",
  },
  {
    smallTitle: "Seamless Handling in High-Traffic Areas​",
    title: "Multi Vehicle Detection",
    description:
      "Efficiently identifies and distinguishes license plates in high-traffic scenarios",
    image: "/images/lprcontent/angle.png",
  },
];
