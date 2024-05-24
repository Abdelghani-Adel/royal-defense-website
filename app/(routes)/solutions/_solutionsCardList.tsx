"use client";
import solutions from "@/public/data/solutions.json";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { v4 } from "uuid";

const SolutionsCardList = () => {
  const params = useSearchParams();

  useEffect(() => {
    if (params) {
      params.forEach((param) => {
        const sectionElement = document.getElementById(param);
        if (sectionElement) {
          sectionElement.scrollIntoView({ behavior: "smooth" });
        }
      });
    }
  }, [params]);

  return (
    <>
      {solutions.technological.map((card, i) => (
        <div
          id={card.id}
          className={`solutionCard ${i % 2 != 0 ? "bg" : ""}`}
          key={v4()}
        >
          <span className="category">Technological</span>
          <div>
            <h2 className="mb-3">{card.title}</h2>
            <p className="fw-light">{card.desc}</p>
          </div>

          <div className="d-none d-lg-block">
            <div className="solutionCard_img">
              <Image src={card.img} fill alt="" />
            </div>
          </div>
        </div>
      ))}

      {solutions.law.map((card, i) => (
        <div
          id={card.id}
          className={`solutionCard ${i % 2 == 0 ? "bg" : ""}`}
          key={v4()}
        >
          <span className="category">Law Enforcement</span>
          <div>
            <h2 className="mb-3">{card.title}</h2>
            <p className="fw-light">{card.desc}</p>
          </div>

          <div className="d-none d-lg-block">
            <div className="solutionCard_img">
              <Image src={card.img} fill alt="" />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
export default SolutionsCardList;
