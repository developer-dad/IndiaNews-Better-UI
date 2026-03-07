import React, { useState } from "react";
import { AnimatePresence, easeIn, easeOut, motion } from 'motion/react'
import DropDown from "./DropDown";
import { LABEL } from "../../Data/assets";
import { TiArrowSortedDown } from "react-icons/ti";

const Menu = ({
  modal,
  setCountry,
  setCategory,
  setCountryName,
  setCategoryName,
  setMenuModal
}) => {
  const [openDropDown, setOpenDropDown] = useState(false);
  const [labelClicked, setLabelClicked] = useState(null);

  const menuVariant = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.35,
      easeOut
    }
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.25,
     easeIn
    }
  }
};

  return (
    <AnimatePresence>
      {/* Menu Div */}
      {modal && (
        <>
          <motion.div 
          variants={menuVariant}
          animate="show"
          initial="hidden"
          exit="exit"
          className="flex justify-around bg-white/15 backdrop-blur-2xl text-xl py-8 px-8 space-x-3 rounded-xl">
            {/* DropDown Element of Div */}
            {LABEL.map((label, index) => (
              <p
                key={index}
                onClick={() => {
                  setOpenDropDown((prev) => !prev);
                  setLabelClicked(label);
                }}
                className="flex justify-center items-center gap-2 border text-white border-white/45 py-2 px-3 rounded-2xl shadow-lg shadow-black/20"
              >
                {label}
                <TiArrowSortedDown
                  className={`transition-transform duration-200 ${
                    openDropDown && labelClicked === label
                      ? "rotate-180"
                      : "rotate-0"
                  }`}
                />
              </p>
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
            setMenuModal={setMenuModal}
          />
        </>
      )}
    </AnimatePresence>
  );
};

export default Menu;