import { FaRegClock } from "react-icons/fa";

const TopHeader = () => {
  return (
    <div className="topHeader d-none d-md-flex">
      <div className="d-flex">
        <p className="px-3">info@royal-defense.cloud</p>
        <p className="px-3 borderLeft">01153588887</p>
      </div>

      <p>
        <FaRegClock /> Sunday - Friday 09:00AM - 05:00PM
      </p>
    </div>
  );
};

export default TopHeader;
