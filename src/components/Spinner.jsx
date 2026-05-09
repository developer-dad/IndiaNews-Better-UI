import React from "react";

const Spinner = ({ size }) => {
  return (
    <div className="flex justify-center items-center">
      <div style={{
        width: `${size}px`,
        height: `${size}px`
      }} className=" border-4 border-white/50 border-t-black rounded-full animate-spin"></div>
    </div>
  );
};

export default Spinner;