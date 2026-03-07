import React, { useState } from "react";
import { motion } from "motion/react";

const CurrentNews = ({ countryName, categoryName, q }) => {
  const searchExists = q && q.trim() !== "";

  const divVarients = {
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        ease: "easeIn",
        delay: 0.25,
      },
    },
    hidden: {
      opacity: 0,
      scale: 0.95,
    },
  };

  return (
    <motion.div
      variants={divVarients}
      initial="hidden"
      animate="show"
      className="overflow-hidden relative rounded-xl border border-white/30 select-none mt-3 md:mt-5"
    >
      <div className="h-20 w-50 bg-white/70 rounded-full blur-2xl absolute inset-0 left-96 md:left-9/12"></div>
      <div className="bg-gray-600/30 text-center text-white text-md font-bold flex justify-center items-center backdrop-blur-3xl h-14 md:h-16 md:text-2xl">
        {!searchExists ? (
          <p>
            IndiaNews - Showing {categoryName} News of {countryName}.
          </p>
        ) : (
          <p>IndiaNews - Showing search result for {q}.</p>
        )}
      </div>
      <div className="h-20 w-50 bg-white/30 rounded-full blur-2xl absolute inset-0"></div>
    </motion.div>
  );
};

export default CurrentNews;
