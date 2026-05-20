import React from "react";
import { CiBookmark } from "react-icons/ci";

const Loader = () => {
  return (
    <div className="relative h-120 rounded-xl overflow-hidden bg-white/10 animate-pulse">
      <div className="absolute inset-0 bg-linear-to-t from-black via-black/55 to-transparent z-10" />

      <div className="relative z-20 h-full flex flex-col justify-between p-4">
        <div className="flex items-center justify-between">
          <div className="w-20 h-7 rounded-full bg-white/25 backdrop-blur-lg" />

          <div className="bg-white/30 p-1 border border-white/40 rounded-lg">
            <CiBookmark size={18} className="text-white/40" />
          </div>
        </div>

        <div>
          <div className="h-6 w-10/12 rounded-md bg-white/25 mb-3" />
          <div className="h-6 w-8/12 rounded-md bg-white/25 mb-4" />

          <div className="space-y-2 mb-8">
            <div className="h-4 w-full rounded-md bg-white/20" />
            <div className="h-4 w-11/12 rounded-md bg-white/20" />
            <div className="h-4 w-7/12 rounded-md bg-white/20" />
          </div>

          <div className="flex items-center justify-between">
            <div className="h-10 w-28 rounded-full bg-white/25" />

            <div className="space-y-2">
              <div className="h-3 w-32 rounded-md bg-white/20" />
              <div className="h-3 w-20 ml-auto rounded-md bg-white/20" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;