"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Signature } from "@/assets/Icons";
import moment from "moment";

const AboutPage = () => {
  const skillRef = useRef();
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });
  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });

  const skillLists = [
    "JavaScript",
    "React.js",
    "Next.js",
    "HTML/CSS",
    "Redux",
    "JavaScript",
    "Jest",
    "Git",
    "Node.js",
    "Sass",
    "Framer Motion",
    "Bootstrap",
    "Tailwind CSS",
    "Ant Design",
    "D3.js",
    "Ant Design Charts",
    "React-Grid-Layout",
    "ExcelJS",
    "RESTful APIs",
  ];

  const jobsDetails = [
    {
      title: "Internship",
      description: "Cyber Security Intern",
      startDate: "21-05-2021",
      endDate: "31-07-2021",
      company: "GPCSSI-2021",
    },
    {
      title: "Senior Frontend Developer",
      description: "Worked on a product as a React.Js Developer",
      startDate: "21-09-2021",
      endDate: "Present",
      company: "Microsec.ai Security",
    },
  ];

  function formatDuration(start, end) {
    const startDate = moment(start, "DD-MM-YYYY");
    const endDate = end !== "Present" ? moment(end, "DD-MM-YYYY") : moment();

    const duration = moment.duration(endDate.diff(startDate));
    const years = duration.years();
    const months = duration.months();

    let result = "";

    if (years > 0) {
      result += `${years} ${years === 1 ? "Year" : "Years"}`;
    }

    if (months > 0) {
      if (result.length > 0) {
        result += " ";
      }
      result += `${months} ${months === 1 ? "Month" : "Months"}`;
    }

    return result.length > 0 ? result : "Less than a month";
  }

  const DateRange = ({ start, end }) => {
    const formattedStart = moment(start, "DD-MM-YYYY").format("MMM YYYY");
    const formattedEnd =
      end !== "Present"
        ? moment(end, "DD-MM-YYYY").format("MMM YYYY")
        : "Present";
    const durationString = formatDuration(start, end);

    return (
      <div className="flex flex-col">
        <span className="mr-1"> {`${formattedStart} - ${formattedEnd}`}</span>
        <span>{`(${durationString})`}</span>
      </div>
    );
  };

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
            {/* biography title */}
            <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
            {/* biography description */}
            <p className="text-lg">
              <span>{`Full Stack Web Developer`}</span>
              <span>{`
Passionate about crafting seamless digital experiences, I specialize in full-stack web development with expertise in ReactJS, 
Next.js, HTML/CSS, Sass, Redux, and RESTful APIs. Adept at utilizing styling and component libraries such as Bootstrap, 
Tailwind CSS, Ant Design, and React-Grid-Layout. With a commitment to clean code and user-centric design, I bring innovation to every project. 
Let's build something extraordinary together!`}</span>
            </p>
            {/* biography quote */}
            <span className="italic">
              Empowering digital landscapes through code, where creativity meets
              functionality, and innovation shapes seamless user experiences.
            </span>
            {/* biography sign */}
            <div className="self-end">
              <Signature />
            </div>
          </div>
          {/* skills container */}
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            {/* SKILL title */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              SKILLS
            </motion.h1>
            {/* skill list */}
            <motion.div
              className="flex gap-4 flex-wrap"
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              {skillLists.map((skill) => (
                <>
                  <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                    {skill}
                  </div>
                </>
              ))}
            </motion.div>
          </div>
          {/* experience container */}
          <div
            className="flex flex-col gap-12 justify-center pb-48"
            ref={experienceRef}
          >
            {/* experience title */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              EXPERIENCE
            </motion.h1>
            {/* experience list */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className=""
            >
              {jobsDetails.reverse().map((job, index) => {
                return (
                  <div
                    className="flex justify-between gap-4"
                    key={`${index}-${job?.title}`}
                  >
                    {/* left */}
                    <div
                      className={`w-full ${index % 2 === 0 ? "" : "order-1"}`}
                    >
                      {/* job title */}
                      <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                        {job.title}
                      </div>
                      {/* job description */}
                      <div className="p-3 text-sm italic">
                        {job.description}
                      </div>
                      {/* job date */}
                      <div className="p-3 text-sm text-red-400 font-semibold">
                        <DateRange start={job?.startDate} end={job?.endDate} />
                      </div>
                      {/* job company */}
                      <div className="p-1 rounded bg-white text-sm font-semibold">
                        {job?.company}
                      </div>
                    </div>
                    {/* center */}
                    <div className="w-1/3 flex justify-center">
                      <div className="w-1 h-full bg-violet-700 rounded relative">
                        <div className="absolute w-5 h-5 rounded-full ring-4 ring-purple-700 bg-white -left-2"></div>
                      </div>
                    </div>
                    {/* right */}
                    <div
                      className={`w-full ${
                        index % 2 === 0 ? "" : "order-[-1]"
                      }`}
                    ></div>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>
        {/* svg container */}
        <div></div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
