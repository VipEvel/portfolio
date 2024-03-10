"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { GitHub, LinkedIn } from "@/assets/Icons";
import NavLink from "../common/NavLink";
import { motion } from "framer-motion";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
    },
  };
  const middleVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };
  const bottomVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
    },
  };

  const listVariant = {
    closed: {
      x: "100vh",
    },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };
  const listItemVariant = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };

  const links = [
    { url: "/", title: "Home" },
    { url: "/about", title: "About" },
    { url: "/portfolio", title: "Portfolio" },
    { url: "/contact", title: "Contact Me" },
  ];

  return (
    <nav className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
      {/* Logo */}
      <Link className="vip-logo" href="/">
        <Image
          src="/assets/layout/vip-logo.svg"
          width={60}
          height={60}
          alt="VIP Logo"
        />
      </Link>
      {/* Normal nav menu */}
      <ul className="hidden md:flex gap-4 text-black">
        {links.map((link, index) => (
          <NavLink link={link} key={`${index}-${link?.title?.toLowerCase()}`} />
        ))}
      </ul>
      {/* Social links */}
      <div className="hidden lg:flex gap-4">
        <Link href="#">
          <GitHub />
        </Link>
        <Link href="#">
          <LinkedIn />
        </Link>
      </div>
      {/* Hamburger Menu */}
      <div className="md:hidden">
        {/* Hamburger Button */}
        <button
          className={`h-8 w-10 flex flex-col justify-between relative ${
            open ? "z-20" : ""
          }`}
          onClick={() => setOpen((prev) => !prev)}
        >
          <motion.div
            animate={open ? "opened" : "closed"}
            variants={topVariants}
            className="h-1 w-10 rounded bg-violet-700 origin-left"
          ></motion.div>
          <motion.div
            animate={open ? "opened" : "closed"}
            variants={middleVariants}
            className="h-1 w-10 rounded bg-violet-700"
          ></motion.div>
          <motion.div
            animate={open ? "opened" : "closed"}
            variants={bottomVariants}
            className="h-1 w-10 rounded bg-violet-700 origin-left"
          ></motion.div>
        </button>
        {/* Menu Items */}
        {open && (
          <motion.div
            variants={listVariant}
            animate="opened"
            initial="closed"
            className="w-screen h-screen absolute top-0 left-0 text-black text-3xl bg-gradient-to-b from-blue-50 to-pink-50 flex flex-col items-center justify-center gap-8 z-10"
          >
            {links.map((link, index) => {
              return (
                <motion.div
                  variants={listItemVariant}
                  key={`${index}-${link?.title?.toLowerCase()}`}
                >
                  <Link href={link?.url}>{link?.title}</Link>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
