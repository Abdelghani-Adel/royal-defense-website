import { FaRegClock } from "react-icons/fa";

const TopHeader = () => {
  return (
    <div className="topHeader">
      <div className="topHeader-group">
        <p className="topHeader-groupItem">info@royal-defense.cloud</p>
        <p className="topHeader-groupItem">01153588887</p>
      </div>

      <div className="topHeader-group gap-2">
        <p>
          <FaRegClock /> Sunday - Friday 09:00AM - 05:00PM
        </p>
      </div>
    </div>
  );
};

export default TopHeader;
