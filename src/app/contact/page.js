"use client";

import React from "react";
import { motion } from "framer-motion";
import { SVGBackGround } from "@/assets/Icons";

const ContactPage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        <div className="flex items-center gap-4 flex-col lg:flex-row md:flex-row">
          <div className="">
            <SVGBackGround />
          </div>
          <div className="rounded-xl h-2/3 w-2/3 min-h-[30rem] max-h-[30rem] min-w-[35rem] max-w-[35rem] bg-sky-800">
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactPage;
