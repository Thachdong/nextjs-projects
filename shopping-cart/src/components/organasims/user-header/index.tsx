import React from "react";

import "./index.scss";
import { SvgIcon } from "@/components/atoms/icon";
import Link from "next/link";

export const UserHeader: React.FC = () => {
  return (
    <nav className="user-header nav">
      <a className="user-header__logo" href="/">
        Moni.fs
      </a>

      <ul className="user-header__menu">
        <li>
          <Link href="/">HOME</Link>
        </li>
        <li>
          <Link href="/contact">CONTACT</Link>
        </li>
        <li>
          <Link href="/about">ABOUT US</Link>
        </li>
      </ul>

      <ul className="user-header__right-box">
        <li>
          <SvgIcon name="user" width={24} />
        </li>
        <li>
          <Link href="/cart">
            <SvgIcon name="shopping-bag" width={24} />
          </Link>
        </li>
        <li>
          <SvgIcon name="menu" width={24} />
        </li>
      </ul>
    </nav>
  );
};
