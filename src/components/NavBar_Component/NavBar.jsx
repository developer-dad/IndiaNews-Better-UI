import React, { useEffect, useState, useRef } from "react";
import SearchModal from "./SearchModal";
import Menu from "./Menu";
import { IoSearchSharp } from "react-icons/io5";
import { RiMenuFill } from "react-icons/ri";

const NavBar = () => {
  const [searchModal, setSearchModal] = useState(false);
  const [menuModal, setMenuModal] = useState(false);
  const [openDropDown, setOpenDropDown] = useState(false);
  const [showNav, setShowNav] = useState(true)
  const lastScrollY = useRef(0)
  const inputRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if(Math.abs(currentScrollY - lastScrollY.current) > 10) {
        setShowNav(false)
      }else{
        setShowNav(true)
      }
      lastScrollY.current = currentScrollY
    }
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  useEffect(() => {
    if (searchModal) {
      document.body.style.overflow = "hidden";
      inputRef.current?.focus();
    } else {
      document.body.style.overflow = "block";
    }
  }, [searchModal]);

  return (
    // Navbar Main Div
    <div className={`bg-white/20 backdrop-blur-xl w-full mt-5 rounded-xl border border-white/25 overflow-hidden `}>
      {/* Div Holding Text, Logo & both Buttons together */}
      <div className="flex justify-between items-center">
        {/* Div for Text & Logo */}
        <div className="flex justify-center items-center">
          <img
            src="logo.png"
            alt="Logo"
            className="size-18 overflow-hidden items-center"
          />
          <p className="text-white text-2xl">
            India<span className="text-blue-600">News</span>
          </p>
        </div>

        {/* Div for Search & Menu Button */}
        <div className="flex gap-2">
          <button
            className="border border-white/50 p-2 rounded-full shadow-lg shadow-white/30"
            onClick={() => {
              setSearchModal((prev) => !prev);
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
            <RiMenuFill size={30} className="text-white/95" />
          </button>
        </div>
      </div>

      {/* Search Modal Component */}
      <SearchModal
        modal={searchModal}
        onClickClose={() => setSearchModal(false)}
        onClickSearch={() => setOpenDropDown(false)}
        inputRef={inputRef}
      />

      {/* Menu Component */}
      <Menu
        modal={menuModal}
        setOpenDropDown={() => {
          setOpenDropDown((prev) => !prev);
        }}
        openDropDown={openDropDown}
      />
    </div>
  );
};

export default NavBar;
