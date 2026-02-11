import React, { useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";

function SearchModal({ modal, onClickClose, inputRef }) {
  const [searchValue, setSearchValue] = useState("");

  const onClickSearch = (e) => {
    e.preventDefault()
    if (!searchValue.trim()) return;
    onClickClose();
  };

  return (
    <div
      className={`fixed -inset-x-4 -inset-y-5 w-screen h-screen bg-black/80 ${modal ? "block" : "hidden"}`}
    >
      <div className="flex justify-around gap-1 my-8 mx-8">
        <form onSubmit={onClickSearch}>
          <input
            ref={inputRef}
            type="text"
            placeholder="Search..."
            value={searchValue}
            className="bg-transparent border border-white text-white w-full placeholder-white/60 rounded-full px-4 py-2 "
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </form>
        <button onClick={onClickSearch} className="text-white">
          <IoIosSearch size={30} />
        </button>
        <button onClick={onClickClose} className="text-white">
          <IoIosCloseCircleOutline size={35} />
        </button>
      </div>
      <hr className="bg-white/80 h-0.5 mx-4" />
    </div>
  );
}

export default SearchModal;
