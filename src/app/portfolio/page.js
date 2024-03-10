"use client";

import React from "react";
import { motion } from "framer-motion";

const page = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* image container */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          {/* <Image
            fill
            src="/assets/img/vip-hero.png"
            alt="VIP Hero"
            className="object-contain"
            style={{ borderRadius: "50%" }}
          /> */}
        </div>
        {/* text container */}
        <div className="h-1/2 lg:h-full lg:w-1/2">
          <div className="h-full flex flex-col gap-8 items-center justify-center">
            {/* title */}
            <h1 className="text-4xl font-bold">
              Crafting Digital Experiences: A Full Stack Journey
            </h1>
            <p>
              I am a web developer, bridging the gap between vision and reality
              in the digital realm. With a synthesis of front-end finesse and
              back-end prowess, I craft immersive experiences that transcend
              boundaries. From pixel-perfect designs to scalable architectures,
              I thrive on the journey of transforming idead into impactful
              solutions.
            </p>
            <div className="flex w-full gap-4">
              <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
                My Work
              </button>
              <button className="p-4 rounded-lg ring-1 ring-black">
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default page;
