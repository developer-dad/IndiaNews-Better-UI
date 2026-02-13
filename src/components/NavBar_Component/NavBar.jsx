import React, { useEffect, useState, useRef } from "react";
import SearchModal from "./SearchModal";
import Menu from "./Menu";
import { IoSearchSharp } from "react-icons/io5";
import { RiMenuFill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { TiArrowSortedDown } from "react-icons/ti";
import { LABEL } from "../../Data/assets";
import DropDown from "./DropDown";

const NavBar = () => {
  const [searchModal, setSearchModal] = useState(false);
  const [menuModal, setMenuModal] = useState(false);
  const [openDropDown, setOpenDropDown] = useState(false);
  const [labelClicked, setLabelClicked] = useState(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (searchModal) {
      document.body.style.overflow = "hidden";
      inputRef.current?.focus();
    } else {
      document.body.style.overflow = "";
    }
  }, [searchModal]);

  return (
    // Navbar Main Div
    <div
      className={`select-none bg-white/20 backdrop-blur-xl w-full min-h-18 mt-5 rounded-xl border border-white/25 md:mt-10`}
    >
      {/* Div Holding Text, Logo & both Buttons together */}
      {!searchModal && (
        <div className="flex justify-between items-center md:mr-5">
          {/* Div for Text & Logo */}
          <div className="flex justify-center items-center">
            <img
              src="logo.png"
              alt="Logo"
              className="size-18 overflow-hidden items-center"
            />
            <p className="text-white text-2xl md:text-3xl md:bg-linear-to-r md:px-1 md:from-white/75 md:text-black md:rounded-l-lg">
              India<span className="text-blue-600">News</span>
            </p>
          </div>

          {/* Div for Search & Menu Button */}
          <div className="flex gap-2 md:hidden">
            <button
              className="border border-white/50 p-2 rounded-full shadow-lg shadow-white/30"
              onClick={() => {
                setSearchModal((prev) => !prev);
                setMenuModal(false);
              }}
            >
              <IoSearchSharp size={30} className="text-white/95" />
            </button>
            <button
              className="border border-white/50 py-2 pl-3 pr-1 rounded-full rounded-r-xl shadow-lg shadow-white/30"
              onClick={() => {
                setMenuModal((prev) => !prev);
              }}
            >
              {!menuModal ? (
                <RiMenuFill size={30} className="text-white/95" />
              ) : (
                <IoMdClose size={30} color="white" />
              )}
            </button>
          </div>

          {/* DropDown Divs for Desktop - Country & Category */}
          <div className="hidden md:block">
            <div className="flex gap-1.5">
              {LABEL.map((label, index) => (
                <div
                  key={index}
                  onClick={() => {
                    setOpenDropDown((prev) => !prev);
                    setLabelClicked(label);
                  }}
                  className={`flex items-center gap-1.5 bg-white/15 px-3 text-lg py-1 shadow-lg shadow-white/25 border border-white/50 text-white/80 rounded-full ${index === 0 ? "rounded-r-none" : index === 1 ? "rounded-l-none" : ""}`}
                >
                  {label}
                  <TiArrowSortedDown
                    className={`transition-transform duration-200 ${openDropDown && labelClicked === label ? "rotate-180" : "rotate-0"}`}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Search Input For Desktop */}
          <div className="hidden md:block">
            <div className="relative flex items-center">
              <IoSearchSharp className="absolute size-6 text-white mx-2" />
              <input
                type="text"
                placeholder="Search..."
                className="focus:outline-blue-600 py-1.5 px-9 rounded-full placeholder:text-white/75 border border-white shadow-lg shadow-white/25 text-white"
              />
            </div>
          </div>
        </div>
      )}

      {/* Search Modal Component */}
      <SearchModal
        modal={searchModal}
        onClickClose={() => setSearchModal(false)}
        inputRef={inputRef}
      />

      {/* Menu Component */}
      <Menu modal={menuModal} />

      {/* DropDown Component for desktop */}
      <DropDown modal={openDropDown} Clicked={labelClicked} />
    </div>
  );
};

export default NavBar;
