"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import NavBar from "../layout/NavBar";
import { usePathname } from "next/navigation";
import Image from "next/image";

const TransitionProvider = ({ children }) => {
  const pathName = usePathname();
  return (
    <AnimatePresence mode="wait">
      <div
        key={pathName}
        className="w-screen h-screen bg-gradient-to-b from-white via-violet-50 to-sky-300"
      >
        <motion.div
          className="h-screen w-screen fixed bg-black rounded-b-[100px] z-40"
          animate={{ height: "0vh" }}
          exit={{ height: "120vh" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
        <motion.div
          className="fixed m-auto top-0 bottom-0 left-0 right-0 text-white text-6xl cursor-default z-50 w-fit h-fit capitalize flex flex-col justify-center items-center"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image
            src="/assets/layout/vip-logo.svg"
            width={60}
            height={60}
            alt="VIP Logo"
          />
          <span className="mt-2">{pathName?.substring(1)}</span>
        </motion.div>
        <motion.div
          className="h-screen w-screen fixed bg-black rounded-t-[100px] bottom-0 z-30"
          initial={{ height: "120vh" }}
          animate={{ height: "0vh", transition: { delay: 0.5 } }}
        />

        <div className="h-24">
          <NavBar />
        </div>
        <div className="h-[calc(100vh-6rem)]">{children}</div>
      </div>
    </AnimatePresence>
  );
};

export default TransitionProvider;
