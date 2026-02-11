import React, { useEffect, useRef, useState } from "react";
import { CgSearch } from "react-icons/cg";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoIosCloseCircleOutline } from "react-icons/io";
import SearchModal from "./SearchModal";

function SearchMenu({ toggleMenu }) {
  const [modal, setModal] = useState(false);
  const [value, setValue] = useState('')
  const inputRef = useRef(null)

  const onClickSearch = (e) => {
    e.preventDefault()
    if(!value.trim() == null) return;
  }

  useEffect(() => {
    if (modal) {
      document.body.style.overflow = "hidden";
      inputRef.current?.focus()
    } else {
      document.body.style.overflow = "";
    }
  }, [modal]);

  return (
    <div className="flex gap-1.5 mx-2 md:mx-4">
      {/* SEARCH */}
      <div className="border border-white/75 shadow-sm shadow-white/40 inset-shadow-sm inset-shadow-white/30 flex items-center justify-center rounded-full text-white my-2 mx-0.5 px-1.5 pl-1 pr-2 md:my-5 md:px-1 md:py-1.5">
        <button onClick={() => setModal(true)} className="block md:hidden" >
          <CgSearch className="size-7" />
        </button>
          <CgSearch className="size-7 hidden md:block" />
        <form onSubmit={onClickSearch} >
        <input
          type="text"
          value={value}
          placeholder="Search..."
          className="bg-transparent outline-none border-none focus:ring-0 w-full placeholder-white/60 rounded-full px-2 md:block hidden"
          onChange={(e) => setValue(e.target.value)}
        />
        </form>
      </div>

      <SearchModal modal={modal} onClickClose={() => {setModal(false)}} inputRef={inputRef}/>

      {/* MENU */} 
      <div
        className="border border-white/75 shadow-sm shadow-white/40 inset-shadow-sm inset-shadow-white/30 rounded-l-3xl rounded-r-xl text-white my-2 mx-0.5 pl-2 pr-0.5 py-1.5 md:hidden"
        onClick={toggleMenu}
      >
        <HiOutlineMenuAlt3 className="size-7" />
      </div>
    </div>
  );
}

export default SearchMenu;
