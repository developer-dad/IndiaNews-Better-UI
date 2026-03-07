import React, { useRef } from "react";
import { AnimatePresence, easeIn, easeOut, motion } from 'motion/react'
import { IoMdClose } from "react-icons/io";
import { IoSearchSharp } from "react-icons/io5";

const SearchModal = ({ modal, onClickClose, inputRef, inputValue, setInputValue, setQ, setSearchModal }) => {
  const inputVariants = {
  hidden: {
    width: 100,
    opacity: 1
  },
  show: {
    width: 325,
    opacity: 1,
    transition: {
      duration: 0.5,
      easeIn
    }
  },
  exit: {
    width: 100,
    opacity: 0,
    transition: {
      duration: 0.3,
      easeOut
    }
  }
};

  return (
    <AnimatePresence>
    {modal && (
      <div
      className="absolute flex items-center justify-end gap-2 inset-0 pl-5">
        <motion.div
        variants={inputVariants}
        animate="show"
        initial="hidden"
        exit="exit"
        className="relative flex items-center w-full">
          <input
            type="text"
            ref={inputRef}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => {
              if(e.key === "Enter"){
                setQ(inputValue)
                setSearchModal(false)
              }
            }}
            placeholder="Search..."
            className="text-white border bg-black/10 border-white/50 rounded-full px-12 py-2.5 w-full shadow-lg shadow-white/30 focus:outline-blue-600/75"
          />
          <IoSearchSharp className="absolute inset-0 text-white/90 size-8 m-2" />
        </motion.div>
        <motion.div
          exit={{opacity: 0}}
          transition={{duration: 0.1}}
          onClick={onClickClose}
          className="border border-white/75 py-2 pl-3 pr-1 rounded-full rounded-r-xl shadow-lg shadow-white/60 bg-black/15"
        >
          <IoMdClose size={30} color="white" />
        </motion.div>
      </div>
    )}
    </AnimatePresence>
  )
};

export default SearchModal;
