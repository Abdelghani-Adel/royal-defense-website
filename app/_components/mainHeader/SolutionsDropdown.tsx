import React, { useState } from "react";
import { FaArrowDown } from "react-icons/fa6";

const SolutionsDropdown = () => {
  const [isOpened, setIsOpened] = useState(false);
  const [firstMenuOpened, setFirstMenuOpened] = useState(false);
  const [secondMenuOpened, setSecondMenuOpened] = useState(false);

  const openMainMenu = () => {
    setIsOpened(true);
  };

  const openFirstMenu = () => {
    setFirstMenuOpened(true);
  };

  const openSecondMenu = () => {
    setSecondMenuOpened(true);
  };

  return (
    <li className="navItem dropNav shown">
      <div className="dropNav_title">
        <span>Solutions</span>
        <span className="arrow">
          <FaArrowDown />
        </span>
      </div>

      <div className={`dropMenu ${isOpened ? "shown" : ""}`}>
        <ul className="dropNav">
          <li className="dropNav_title">
            <span>Technological</span>
            <span className="arrow">
              <FaArrowDown />
            </span>
          </li>

          <div className={`dropMenu ${firstMenuOpened ? "shown" : ""}`}>
            adfasdf
          </div>
        </ul>

        <ul className="dropNav">
          <li className="dropNav_title">
            <span>Law Enforcement</span>
            <span className="arrow">
              <FaArrowDown />
            </span>
          </li>

          <div className={`dropMenu ${secondMenuOpened ? "shown" : ""}`}>
            1321321
          </div>
        </ul>
      </div>
    </li>
  );
};

export default SolutionsDropdown;
