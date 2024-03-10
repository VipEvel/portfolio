"use client";

import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0" }}
      transition={{ duration: 1 }}
    >
      {/* container */}
      <div className="">
        {/* text container */}
        <div className="p-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64">
          {/* biography container */}
          <div className="flex flex-col gap-12 justify-center">
            {/* <h1></h1> {'https://www.youtube.com/watch?v=DJaZUFK8Kv4'}
            <p>1:16:18</p> */}
            <span></span>
          </div>
          {/* skills container */}
          <div></div>
          {/* experience container */}
          <div></div>
        </div>
        {/* svg container */}
        <div></div>
      </div>
    </motion.div>
  );
};

export default About;
