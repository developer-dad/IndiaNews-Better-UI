import React from "react";
import { COUNTRY, CATEGORY } from "../../Data/assets";
import { motion, AnimatePresence } from "framer-motion";

const DropDown = ({
  modal,
  Clicked,
  setCountry,
  setCategory,
  setCountryName,
  setCategoryName,
  setOpenDropDown,
}) => {
  let data = [];
  if (Clicked === "Country") {
    data = COUNTRY;
  } else if (Clicked === "Category") {
    data = CATEGORY;
  }

  const containerVariants = {
    hidden: {
      opacity: 0,
      y: -10,
      scale: 0.95,
    },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.25,
        ease: "easeOut",
        staggerChildren: 0.05,
      },
    },
    exit: {
      opacity: 0,
      y: -10,
      scale: 0.95,
      transition: {
        duration: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -5 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.2 },
    },
  };

  return (
    <AnimatePresence>
      {modal && (
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        exit="exit"
        className="flex flex-col text-center text-white/85 text-lg"
      >
        {data.map((list, index) => {
          const lastId = index === data.length - 1;
          return (
            <motion.div
              key={index}
              variants={itemVariants}
              initial='hidden'
              animate='show'
              onClick={() => {
                setOpenDropDown(false);
                if (Clicked === "Country") {
                  setCountry(list.code);
                  setCountryName(list.name);
                } else if (Clicked === "Category") {
                  setCategory(list.code);
                  setCategoryName(list.name);
                }
              }}
              className="cursor-pointer hover:text-black"
            >
              {list.name}
              {!lastId && <hr className="text-white/75" />}
            </motion.div>
          );
        })}
      </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DropDown;
