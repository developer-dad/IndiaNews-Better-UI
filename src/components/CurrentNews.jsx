import React from "react";

function CurrentNews() {
  return (
    <div className="overflow-hidden mt-6 mx-28 relative select-none">
      <div className="h-20 w-50 bg-white rounded-full blur-2xl absolute left-9/12"></div>
      <div className="bg-gray-600/30 border border-white/30 rounded-xl h-16 text-white text-2xl font-bold flex justify-center items-center backdrop-blur-3xl">
        <p>IndiaNews - Showing General News of India.</p>
      </div>
      <div className="h-20 w-50 bg-white rounded-full blur-2xl absolute left-96"></div>
    </div>
  );
}

export default CurrentNews;