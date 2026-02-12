import React, { useRef } from "react";
import { IoMdClose } from "react-icons/io";

const SearchModal = ({ modal, onClickClose, onClickSearch, inputRef }) => {
  return (
    modal && (
      <div onClick={onClickSearch} className="absolute flex items-center justify-end gap-2 inset-0 pl-5 bg-black">
        <div className="w-full">
          <input type="text" ref={inputRef} placeholder="Search..." className="text-white border bg-black/10 border-white/50 rounded-full px-4 py-2.5 w-full shadow-lg shadow-white/30"/>
        </div>
        <div onClick={onClickClose} className="border border-white/50 py-2 pl-3 pr-1 rounded-full rounded-r-xl shadow-lg shadow-white/30">
          <IoMdClose size={30} color="white" />
        </div>
      </div>
    )
  );
};

export default SearchModal;
