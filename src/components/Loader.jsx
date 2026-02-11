import React from "react";

function Loader() {
  return (
    <div className="flex flex-row gap-2 items-center py-10 justify-center">
      <div className="w-4 h-4 rounded-full bg-white/75 animate-bounce [animation-delay:.6s]"></div>
      <div className="w-4 h-4 rounded-full bg-white animate-bounce [animation-delay:.3s]"></div>
      <div className="w-4 h-4 rounded-full bg-white/75 animate-bounce [animation-delay:.6s]"></div>
    </div>
  );
}

export default Loader;
