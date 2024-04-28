"use client";
import BottomHeader from "./BottomHeader";
import TopHeader from "./TopHeader";
import { usePathname } from "next/navigation";

const MainHeader = () => {
  const pathname = usePathname();

  if (pathname == "/lpr-test") return null;

  return (
    <div>
      <TopHeader />
      <BottomHeader />
    </div>
  );
};

export default MainHeader;
