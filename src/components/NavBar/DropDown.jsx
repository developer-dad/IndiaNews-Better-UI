import React from "react";
import { FaCaretDown } from "react-icons/fa6";

function DropDown({onClick, label, isOpen, items, renderItems, rounded}) {
  return (
      <div
        className={`flex items-center text-white text-[18px] border px-1 py-1 rounded-xl ${rounded ? "rounded-l-full" : "rounded-r-full"} shadow-xl ${
          isOpen ? "border-white" : "shadow-white/25 border-white/60"
        }`}
        onClick={onClick}
      >
        <div className={`hover:bg-white/25 flex items-center gap-1 px-4 py-0.5 rounded-lg ${rounded ? "rounded-l-full" : "rounded-r-full"}`}>
          <p>{label}</p>
          <FaCaretDown
            className={`transition-transform duration-300 ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          />
        </div>
        <div className={`relative ${isOpen ? "block" : "hidden"}`}>
          <div className="absolute z-9999 w-32 top-7 -right-2 bg-white/20 flex flex-col text-end text-white gap-0.5 rounded-xl p-1 backdrop-blur-2xl border border-white/30">
            {items.map(renderItems)}
          </div>
        </div>
    </div>
  );
}

export default DropDown;
