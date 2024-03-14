"use client";

import React from "react";
import { motion } from "framer-motion";

const ContactPage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        <div>
          <form action="">
            <div className="form-input bg-white shadow-md rounded-xl p-4 relative">
              <label className="label-placeholder text-slate-500 absolute pl-2" htmlFor="user_name">Name</label>
              <input type="text" id='user_name' className="focus:outline-none"/>
            </div>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactPage;
