import React from "react";
import SolutionCard from "./_solutionCard";
import { v4 } from "uuid";

const CardsList = () => {
  return (
    <div className="row">
      {cards.map((card, i) => (
        <div key={v4()} className="col-12 col-md-6" data-aos="fade-up">
          <SolutionCard data={card} />
        </div>
      ))}
    </div>
  );
};

export default CardsList;

const cards: ISolutionCardData[] = [
  {
    img: "/images/solutionscards/camera2.webp",
    title: "Video Surveillance systems",
    desc: "Our wealth of experience encompasses the design and integration of highly advanced and intelligent video surveillance systems.",
    urlTarget: "/solutions",
  },
  {
    img: "/images/solutionscards/accesscontrol.png",
    title: "Access Control Systems",
    desc: "Our wealth of experience encompasses the design and integration of highly advanced and intelligent video surveillance systems.",
    urlTarget: "/solutions",
  },
  {
    img: "/images/solutionscards/vehiclesidentification.png",
    title: "vehicles Identification System",
    desc: "Our wealth of experience encompasses the design and integration of highly advanced and intelligent video surveillance systems.",
    urlTarget: "/solutions",
  },
  {
    img: "/images/solutionscards/gatebarrier.png",
    title: "Gate Barrier",
    desc: "Our wealth of experience encompasses the design and integration of highly advanced and intelligent video surveillance systems.",
    urlTarget: "/solutions",
  },
  {
    img: "/images/solutionscards/gatebarrier.png",
    title: "Pedestrian Entrance Gates",
    desc: "Our wealth of experience encompasses the design and integration of highly advanced and intelligent video surveillance systems.",
    urlTarget: "/solutions",
  },
  {
    img: "/images/solutionscards/camera2.webp",
    title: "Address & Sound Systems",
    desc: "Our wealth of experience encompasses the design and integration of highly advanced and intelligent video surveillance systems.",
    urlTarget: "/solutions",
  },
];
