import React from "react";
import { IoWarningOutline } from "react-icons/io5";
import { motion, AnimatePresence } from "motion/react";

const Toast = () => {
  return (
    <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: -40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -40, scale: 0.95 }}
          transition={{ duration: 0.25 }}
          className="fixed top-5 left-1/2 -translate-x-1/2 z-9999"
        >
          <div className="flex items-center gap-3 px-5 py-4 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-2xl shadow-2xl shadow-black/40 text-white min-w-[320px]">
            
            <div className="flex items-center justify-center size-11 rounded-full bg-yellow-400/20 border border-yellow-300/30">
              <IoWarningOutline className="text-yellow-300 size-6" />
            </div>

            <div className="flex flex-col">
              <h2 className="text-sm font-semibold">
                Authentication Required
              </h2>

              <p className="text-sm text-white/70">
                Login or signup first to save news.
              </p>
            </div>
          </div>
        </motion.div>
    </AnimatePresence>
  );
};

export default Toast;