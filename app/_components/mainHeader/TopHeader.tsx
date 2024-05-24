import { FaRegClock } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";

const TopHeader = () => {
  return (
    <div className="topHeader d-none d-md-flex">
      <div className="d-flex">
        <p className="px-3">
          <MdOutlineMailOutline /> info@royal-defense.com
        </p>
      </div>

      <div className="d-flex">
        <p className="px-3">
          <FaPhone />
          +201101005678
        </p>
        <p className="px-3 borderLeft">
          <FaRegClock /> Sunday - Thursday 09:00AM - 05:00PM
        </p>
      </div>
    </div>
  );
};

export default TopHeader;
