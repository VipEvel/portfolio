"use client";

import React, { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import Link from "next/link";
import { Arrow } from "@/assets/Icons";
import Image from "next/image";

const PortFolioPage = () => {
  const portfolioRef = useRef();
  const [selectedCard, setSelectedCard] = useState(null);
  const { scrollYProgress } = useScroll({ target: portfolioRef });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const projectLists = [
    {
      id: "p-1",
      title: "project 1",
      desc: "dekhte hain",
      img: "",
      link: "",
      github: "",
    },
    {
      id: "p-2",
      title: "project 2",
      desc: "dekhte hain",
      img: "",
      link: "",
      github: "",
    },
    {
      id: "p-3",
      title: "project 3",
      desc: "dekhte hain",
      img: "",
      link: "",
      github: "",
    },
  ];

  const textMotion = {
    hover: {
      x: 10,
      transition: {
        duration: 0.4,
        type: "tween",
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0" }}
      transition={{ duration: 1 }}
    >
      <div ref={portfolioRef} className="h-full">
        <div className="flex flex-col items-center justify-center h-screen">
          <div className="w-full h-2/3 relative">
            {selectedCard && (
              <motion.div
                // src={selectedCard.imageUrl}
                // alt={selectedCard.title}
                className="w-full h-full object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              ></motion.div>
            )}
          </div>
          <div className="w-screen h-[calc(100vh-6rem)] p-4">
            <div className="flex items-center gap-10 justify-center">
              <AnimatePresence>
                {projectLists?.map((project) => (
                  <>
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{
                        scale: 1,
                        transition: { delay: 0.5, type: "spring" },
                      }}
                      layout
                      whileHover={{ backgroundColor: "rgba(0,0,0,0.1)" }}
                      className="rounded-2xl p-4 border-2 border-black/10 bg-white min-w-70 w-80 min-h-60 h-64 hover:shadow-md"
                    >
                      <Link href="#">
                        <motion.div whileHover="hover" className="">
                          <div className="h-3/4 relative">
                            <Image src="" alt="" fill />
                          </div>
                          <div className="h-1/4">
                            <div className="text-xl font-bold">
                              {project?.title}
                            </div>
                            <div className="flex items-center text-sm">
                              Demo
                              <motion.div
                                variants={textMotion}
                                className="w-[12px] mt-[2px] ml-[5px]"
                              >
                                <Arrow />
                              </motion.div>
                            </div>
                          </div>
                        </motion.div>
                      </Link>
                    </motion.div>
                  </>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PortFolioPage;
