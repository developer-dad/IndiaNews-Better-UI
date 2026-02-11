import React from "react";

function CurrentNews() {
  return (
    // Outer Box
    <div
      className="overflow-hidden relative rounded-xl border border-white/30 select-none mt-3 md:mt-5"
    >
      <div
        className="h-20 w-50 bg-white/70 rounded-full blur-2xl absolute inset-0 left-96 md:left-9/12"
      ></div>
      <div className="bg-gray-600/30 text-white text-md font-bold flex justify-center items-center backdrop-blur-3xl h-14 md:h-16 md:text-2xl">
        <p>IndiaNews - Showing General News of India.</p>
      </div>
      <div
        className="h-20 w-50 bg-white/30 rounded-full blur-2xl absolute inset-0"
      ></div>
    </div>
  );
}

export default CurrentNews;
