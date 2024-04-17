import React, { useState } from "react";
import ScrollableContent from "./ScrollableContent";
import { v4 } from "uuid";

const LprContent = () => {
  const [image, setImage] = useState<string>(content[0].image);

  return (
    <div className=" lprContent">
      {content.map((content) => (
        <ScrollableContent key={v4()} data={content} onActive={setImage} />
      ))}
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
    image: "/images/lprcontent/blurydetection.png",
  },
  {
    smallTitle: "Swift Identification on the Go",
    title: "Fast-Moving Vehicle Detection​",
    description:
      "Ensures precise recognition and rapid identification even at very high speeds.",
    image: "/images/lprcontent/blurydetection.png",
  },
  {
    smallTitle: "Secure in The Dark​​",
    title: "Low-Light Environment Detection​",
    description:
      "Ability to thrive in low-light or dark environments, providing reliable recognition regardless of lighting conditions.",
    image: "/images/lprcontent/blurydetection.png",
  },
  {
    smallTitle: "Adaptable to Varied Layouts​",
    title: "Dual Row Plate Recognition",
    description:
      "Accurately recognizes license plates displayed in two rows and caters to diverse plate layouts",
    image: "/images/lprcontent/blurydetection.png",
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
    image: "/images/lprcontent/blurydetection.png",
  },
];
