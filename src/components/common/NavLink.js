"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = ({ link }) => {
  const pathName = usePathname();
  return (
    <Link
      className={`rounded p-2 ${
        pathName === link?.url
          ? "text-white bg-black"
          : ""
      }`}
      href={link?.url}
    >
      {link?.title}
    </Link>
  );
};

export default NavLink;
