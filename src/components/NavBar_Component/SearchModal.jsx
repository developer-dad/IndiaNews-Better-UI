import React, { useRef } from "react";
import { IoMdClose } from "react-icons/io";
import { IoSearchSharp } from "react-icons/io5";

const SearchModal = ({ modal, onClickClose, onClickSearch, inputRef }) => {
  return (
    modal && (
      <div className="absolute flex items-center justify-end gap-2 inset-0 pl-5">
        <div className="relative flex items-center w-full">
          <input type="text" ref={inputRef} placeholder="Search..." className="text-white border bg-black/10 border-white/50 rounded-full px-12 py-2.5 w-full shadow-lg shadow-white/30 focus:outline-blue-600/75"/>
          <IoSearchSharp className="absolute inset-0 text-white/90 size-8 m-2" />
        </div>
        <div onClick={onClickClose} className="border border-white/75 py-2 pl-3 pr-1 rounded-full rounded-r-xl shadow-lg shadow-white/60 bg-black/15">
          <IoMdClose size={30} color="white" />
        </div>
      </div>
    )
  );
};

export default SearchModal;
 