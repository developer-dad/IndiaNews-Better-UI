import React from "react";
import logo from "../assets/IndiaNews.png";
import { FaCaretDown } from "react-icons/fa6";
import { CgSearch } from "react-icons/cg";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { useState, useEffect, useRef } from "react";

function NavBar() {
  const [openCountry, setOpenCountry] = useState(false);
  const [openCategory, setOpenCategory] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const dropdownRef = useRef(null);

  const dropDownCountry = () => {
    setOpenCountry((prev) => !prev);
    setOpenCategory(false);
  };

  const dropDownCategory = () => {
    setOpenCategory((prev) => !prev);
    setOpenCountry(false);
  };

  const toggleMenu = () => {
    setOpenMenu(prev => !prev);
  }

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpenCountry(false);
        setOpenCategory(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="select-none">
      <div className={`z-50 bg-white/25 border border-white/30 rounded-xl flex justify-between items-center backdrop-blur-2xl mt-5 mx-4 md:mx-28 md:mt-12 ${openMenu ? "rounded-b-sm" : ""}`}>
        {/* LOGO and TEXT */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-14 md:h-20" />
          <p className="text-white text-2xl md:text-3xl">
            India<span className="text-[#0181EB]">News</span>
          </p>
        </div>

        {/* DROPDOWNS */}
        <div ref={dropdownRef} className="hidden md:block">
          <div className="flex gap-1.5">
            {/* COUNTRY  */}
            <div
              className={`flex items-center text-white text-[18px] border px-1 py-1 rounded-xl rounded-l-full shadow-xl ${
                openCountry ? "border-white" : "shadow-white/25 border-white/60"
              }`}
              onClick={dropDownCountry}
            >
              <div className="hover:bg-white/25 flex items-center gap-1 px-4 py-0.5 rounded-lg rounded-l-full">
                <p>Country</p>
                <div>
                  <FaCaretDown
                    className={`transition-transform duration-300 ${
                      openCountry ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </div>
                {/* COUNTRY DROPDOWN */}
                <div className={`relative ${openCountry ? "block" : "hidden"}`}>
                  <ul className="absolute w-32 top-7 -right-5 bg-white/20 flex flex-col text-end text-white gap-0.5 rounded-xl p-1 backdrop-blur-2xl border border-white/30">
                    <li className="hover:bg-white/25 w-full rounded-lg py-1.5 px-2 cursor-pointer">
                      India
                    </li>
                    <li className="hover:bg-white/25 w-full rounded-lg py-1.5 px-2 cursor-pointer">
                      Russia
                    </li>
                    <li className="hover:bg-white/25 w-full rounded-lg py-1.5 px-2 cursor-pointer">
                      USA
                    </li>
                    <li className="hover:bg-white/25 w-full rounded-lg py-1.5 px-2 cursor-pointer">
                      Chain
                    </li>
                    <li className="hover:bg-white/25 w-full rounded-lg py-1.5 px-2 cursor-pointer">
                      UK
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* CATEGORY */}
            <div
              className={`text-white text-[18px] border px-1 py-1 rounded-xl rounded-r-full shadow-xl ${
                openCategory
                  ? "border-white"
                  : "shadow-white/25 border-white/60"
              }`}
              onClick={dropDownCategory}
            >
              <div className="hover:bg-white/25 flex items-center gap-1 px-4 py-0.5 rounded-lg rounded-r-full">
                <p>Category</p>
                <div>
                  <FaCaretDown
                    className={`transition-transform duration-300 ${
                      openCategory ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </div>
                {/* CATEGORY DROPDOWN */}
                <div
                  className={`relative ${openCategory ? "block" : "hidden"}`}
                >
                  <ul className="absolute w-44 top-7 -right-5 bg-white/20 flex flex-col text-end text-white gap-0.5 rounded-xl p-1 backdrop-blur-2xl border border-white/30">
                    <li className="hover:bg-white/25 w-full rounded-lg py-1.5 pl-8 px-2 cursor-pointer">
                      Top
                    </li>
                    <li className="hover:bg-white/25 w-full rounded-lg py-1.5 pl-8 px-2 cursor-pointer">
                      Business
                    </li>
                    <li className="hover:bg-white/25 w-full rounded-lg py-1.5 pl-8 px-2 cursor-pointer">
                      Entertainment
                    </li>
                    <li className="hover:bg-white/25 w-full rounded-lg py-1.5 pl-8 px-2 cursor-pointer">
                      Health
                    </li>
                    <li className="hover:bg-white/25 w-full rounded-lg py-1.5 pl-8 px-2 cursor-pointer">
                      Science
                    </li>
                    <li className="hover:bg-white/25 w-full rounded-lg py-1.5 pl-8 px-2 cursor-pointer">
                      Sports
                    </li>
                    <li className="hover:bg-white/25 w-full rounded-lg py-1.5 pl-8 px-2 cursor-pointer">
                      Techhnology
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SEARCH */}
        <div className="flex gap-1.5 mx-2 md:mx-4">
          <div className="border border-white/75 shadow-sm shadow-white/40 inset-shadow-sm inset-shadow-white/30 flex items-center justify-center rounded-full text-white my-2 mx-0.5 px-1.5 py-1.5 md:my-5 md:px-2 md:py-1">
            <div>
              <CgSearch className="size-7" />
            </div>
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none border-none focus:ring-0 w-full placeholder-white/60 rounded-full px-2 md:block hidden"
            />
          </div>

          {/* MENU */}
          <div className="border border-white/75 shadow-sm shadow-white/40 inset-shadow-sm inset-shadow-white/30 rounded-l-3xl rounded-r-xl text-white my-2 mx-0.5 pl-2 pr-0.5 py-1.5 md:hidden"  onClick={toggleMenu}>
            <HiOutlineMenuAlt3 className="size-7" />
          </div>
        </div>
      </div>
            <div className={`flex justify-center gap-8 items-center py-7 text-white text-xl mx-4 bg-white/40 border border-white/60 rounded-xl backdrop-blur-2xl ${openMenu ? "block rounded-t-sm" : "hidden"} transition-transform duration-1000 md:hidden`}>
                <div className="flex items-center gap-1 pb-1 bg-black/25 border border-white/30 backdrop-blur-lg shadow-lg shadow-white/25 inset-shadow-sm inset-shadow-white/30 px-3 rounded-full" onClick={dropDownCountry}>
                    <p className="py-1">
                        Country
                    </p>
                    <FaCaretDown/>
                </div>
                <div className={`relative ${openCountry ? "block" : "hidden"}`}>
                  <ul className="absolute w-32 top-7 -right-5 bg-white/20 flex flex-col text-end text-white gap-0.5 rounded-xl p-1 backdrop-blur-2xl border border-white/30">
                    <li className="hover:bg-white/25 w-full rounded-lg py-1.5 px-2 cursor-pointer">
                      India
                    </li>
                    <li className="hover:bg-white/25 w-full rounded-lg py-1.5 px-2 cursor-pointer">
                      Russia
                    </li>
                    <li className="hover:bg-white/25 w-full rounded-lg py-1.5 px-2 cursor-pointer">
                      USA
                    </li>
                    <li className="hover:bg-white/25 w-full rounded-lg py-1.5 px-2 cursor-pointer">
                      Chain
                    </li>
                    <li className="hover:bg-white/25 w-full rounded-lg py-1.5 px-2 cursor-pointer">
                      UK
                    </li>
                  </ul>
                </div>
                <div className="flex items-center gap-1 pb-1 bg-black/25 border border-white/30 backdrop-blur-lg shadow-lg shadow-white/25 inset-shadow-sm inset-shadow-white/30 px-3 rounded-full" onClick={dropDownCategory}>
                    <p className="py-1">
                        Category
                    </p>
                    <FaCaretDown/>
                </div>
                <div
                  className={`relative ${openCategory ? "block" : "hidden"}`}
                >
                  <ul className="absolute w-44 top-7 -right-5 bg-white/20 flex flex-col text-end text-white gap-0.5 rounded-xl p-1 backdrop-blur-2xl border border-white/30">
                    <li className="hover:bg-white/25 w-full rounded-lg py-1.5 pl-8 px-2 cursor-pointer">
                      Top
                    </li>
                    <li className="hover:bg-white/25 w-full rounded-lg py-1.5 pl-8 px-2 cursor-pointer">
                      Business
                    </li>
                    <li className="hover:bg-white/25 w-full rounded-lg py-1.5 pl-8 px-2 cursor-pointer">
                      Entertainment
                    </li>
                    <li className="hover:bg-white/25 w-full rounded-lg py-1.5 pl-8 px-2 cursor-pointer">
                      Health
                    </li>
                    <li className="hover:bg-white/25 w-full rounded-lg py-1.5 pl-8 px-2 cursor-pointer">
                      Science
                    </li>
                    <li className="hover:bg-white/25 w-full rounded-lg py-1.5 pl-8 px-2 cursor-pointer">
                      Sports
                    </li>
                    <li className="hover:bg-white/25 w-full rounded-lg py-1.5 pl-8 px-2 cursor-pointer">
                      Techhnology
                    </li>
                  </ul>
                </div>
            </div>
    </div>
  );
}

export default NavBar;
