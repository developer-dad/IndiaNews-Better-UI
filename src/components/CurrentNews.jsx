import React from "react";
import { easeInOut, motion } from "motion/react";

function CurrentNews() {
  return (
    // Outer Box
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      className="overflow-hidden relative rounded-xl border border-white/30 select-none mt-3 mx-4 md:mx-28 md:mt-5"
    >
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, delay: 0.2, ease: easeInOut }}
        className="h-20 w-50 bg-white/70 rounded-full blur-2xl absolute inset-0 left-96 md:left-9/12"
      ></motion.div>
      <div className="bg-gray-600/30 text-white text-md font-bold flex justify-center items-center backdrop-blur-3xl h-14 md:h-16 md:text-2xl">
        <p>IndiaNews - Showing General News of India.</p>
      </div>
      <motion.div
        initial={{ opacity: 0, x: -50, scale: 1.75, color: "black" }}
        animate={{ opacity: 1, x: 0, scale: 1, color: "white" }}
        transition={{ duration: 0.3, delay: 0.2, ease: easeInOut }}
        className="h-20 w-50 bg-white/30 rounded-full blur-2xl absolute inset-0"
      ></motion.div>
    </motion.div>
  );
}

export default CurrentNews;
