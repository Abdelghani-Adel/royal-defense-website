import { FaRegClock } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";

const TopHeader = () => {
  return (
    <div className="topHeader d-none d-md-flex">
      <div className="d-flex">
        <p className="px-3">
          <MdOutlineMailOutline /> info@royal-defense.cloud
        </p>
      </div>

      <div className="d-flex">
        <p className="px-3">
          <FaPhone /> 01153588887
        </p>
        <p className="px-3 borderLeft">
          <FaRegClock /> Sunday - Friday 09:00AM - 05:00PM
        </p>
      </div>
    </div>
  );
};

export default TopHeader;
