import React from "react";
import { motion } from "motion/react";

function TextLogo(props) {
  return (
    <motion.div className="flex items-center">
      <img src={props.Logo} alt="Logo" className="h-14 md:h-20" />
      <p className="text-white text-xl md:text-3xl">
        India<span className="text-[#0181EB]">News</span>
      </p>
    </motion.div>
  );
}

export default TextLogo;
