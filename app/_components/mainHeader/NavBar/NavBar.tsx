import React from "react";
import navItems from "./NavItems.json";
import { v4 } from "uuid";
import Link from "next/link";
import { FaArrowDown } from "react-icons/fa";

const NavBar = () => {
  return (
    <nav className="navBar">
      <ul className="navBar_itemList">
        {navItems.map((item: INavBarItem) => (
          <NavBarItem key={v4()} item={item} />
        ))}
      </ul>
    </nav>
  );
};

const NavBarItem = ({ item }: { item: INavBarItem }) => {
  const hasChildren = item.children && item.children.length > 0;

  return (
    <li className="navBar_item">
      <Link href={item.path} className="navBar_link">
        {item.title}
      </Link>

      {hasChildren && <FaArrowDown className="arrow" />}

      {hasChildren && (
        <ul className="navBar_itemList">
          {item.children?.map((child) => (
            <NavBarItem key={v4()} item={child} />
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

export default NavBar;
