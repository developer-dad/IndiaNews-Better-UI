import React, { useEffect, useState } from "react";
import { AnimatePresence, easeIn, motion } from "motion/react";
import { BiSolidArrowToTop } from "react-icons/bi";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 400) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const containerVariant = {
    hidden: {
      scale: 0,
      opacity: 0,
      y: 50
    },
    show: {
      scale: [0, 1.25, 1],
      opacity: 1,
      y: 0,
      transition: {
        easeIn,
      },
    },
    exit: {
      scale: 0,
      opacity: 0,
      y: 50
    },
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          variants={containerVariant}
          initial="hidden"
          animate="show"
          exit="exit"
          className="bg-white/80 border border-black/65 fixed inset-0 p-1.5 rounded-full w-fit h-fit left-1/2 -translate-x-1/2 top-full -translate-y-24 z-50 shadow-xl shadow-white/30 md:left-364 md:top-170 hover:scale-105"
          onClick={scrollToTop}
        >
          <BiSolidArrowToTop className="size-8" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
