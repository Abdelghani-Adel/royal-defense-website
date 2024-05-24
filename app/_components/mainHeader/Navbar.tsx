import React from "react";
import navItems from "@/public/data/NavItems.json";
import { v4 } from "uuid";
import Link from "next/link";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";

const NavBar = () => {
  return (
    <nav className="navBar">
      <ul className="navBar_inner">
        {navItems.map((item: INavBarItem) => (
          <NavBarItem key={v4()} item={item} />
        ))}
      </ul>
    </nav>
  );
};

const NavBarItem = (props: INavBarItemProps) => {
  const { item, hasParent } = props;
  const hasChildren = item.children && item.children.length > 0;

  return (
    <li className="navBar_item">
      <Link href={item.path} className="navBar_link">
        {item.title}
      </Link>

      {hasChildren &&
        (hasParent ? (
          <IoIosArrowForward className="arrow" />
        ) : (
          <IoIosArrowDown className="arrow" />
        ))}

      {hasChildren && (
        <ul className="navBar_itemList">
          {item.children?.map((child) => (
            <NavBarItem key={v4()} item={child} hasParent={true} />
          ))}
        </ul>
      )}
    </li>
  );
};

type INavBarItem = {
  title: string;
  path: string;
  cName: string;
  children?: INavBarItem[];
};

type INavBarItemProps = {
  item: INavBarItem;
  hasParent?: boolean;
};

export default NavBar;
