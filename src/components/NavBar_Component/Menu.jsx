import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DropDown from "./DropDown";
import { LABEL } from "../../Data/assets";
import { TiArrowSortedDown } from "react-icons/ti";

const Menu = ({
  modal,
  setCountry,
  setCategory,
  setCountryName,
  setCategoryName,
  menuModal,
}) => {
  const [openDropDown, setOpenDropDown] = useState(false);
  const [labelClicked, setLabelClicked] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
        staggerChildren: 0.08,
      },
    },
    exit: {
      opacity: 0,
      y: -15,
      transition: { duration: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.25 },
    },
  };

  return (
    <>
      {/* Menu Div */}
      <AnimatePresence>
        {modal && (
          <>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="show"
              exit="exit"
              className="flex justify-around bg-white/15 backdrop-blur-2xl text-xl py-8 px-8 space-x-3 rounded-xl"
            >
              {/* DropDown Element of Div */}
              {LABEL.map((label, index) => (
                <motion.p
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setOpenDropDown((prev) => !prev);
                    setLabelClicked(label);
                  }}
                  className="flex justify-center items-center gap-2 border text-white border-white/45 py-2 px-3 rounded-2xl shadow-lg shadow-black/20"
                >
                  {label}
                  <TiArrowSortedDown
                    className={`transition-transform duration-200 ${openDropDown && labelClicked === label ? "rotate-180" : "rotate-0"}`}
                  />
                </motion.p>
              ))}
            </motion.div>
            <DropDown
              modal={openDropDown}
              Clicked={labelClicked}
              setCountry={setCountry}
              setCategory={setCategory}
              setCountryName={setCountryName}
              setCategoryName={setCategoryName}
              setOpenDropDown={setOpenDropDown}
            />
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Menu;
