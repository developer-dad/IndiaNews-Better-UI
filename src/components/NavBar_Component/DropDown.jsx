import React from "react";
import { AnimatePresence, motion } from 'motion/react'
import { COUNTRY, CATEGORY } from "../../Data/assets";

const DropDown = ({
  modal,
  Clicked,
  setCountry,
  setCategory,
  setCountryName,
  setCategoryName,
  setOpenDropDown,
  setMenuModal
}) => {
  let data = [];
  if (Clicked === "Country") {
    data = COUNTRY;
  } else if (Clicked === "Category") {
    data = CATEGORY;
  }

  const dropDownVariant = {
    hidden: {
      opacity: 0
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.08,
        staggerDirection: -1,
        when: "afterChildren"
      }
    }
  }

  const itemVariants = {
    hidden: {
      opacity: 0
    },
    show: {
      opacity: 1
    },
    exit: {
      opacity: 0
    }
  }

  return (
    <AnimatePresence>
        {modal && (
          <motion.div
          variants={dropDownVariant}
          animate="show"
          initial="hidden"
          exit="exit"
          className="flex flex-col text-center text-white/85 text-lg">
            {data.map((list, index) => {
              const lastId = index === data.length - 1;
              return (
                <motion.div
                  variants={itemVariants}
                  key={index}
                  onClick={() => {
                    setOpenDropDown(false);
                    setMenuModal(false)
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
