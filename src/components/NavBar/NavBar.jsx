import React, { useState } from "react";
import TextLogo from "./TextLogo.jsx";
import SearchMenu from "./SearchMenu.jsx";
import DropDown from "./DropDown.jsx";
import Logo from "../../assets/IndiaNews.png";
import { COUNTRY, CATEGORY } from '../../assets/assets.js'

function NavBar() {
  const [openMenu, setOpenMenu] = useState(false);
  const [openDropDown, setOpenDropdown] = useState(null);

  const toggle = (type) => {
    setOpenDropdown((prev) => (prev === type ? null : type));
  };

  return (
    <>
      <div
        className={`relative select-none z-50 bg-white/25 border border-white/30 rounded-xl flex justify-between items-center backdrop-blur-2xl mt-5 md:mt-12}`}
      >
        <TextLogo Logo={Logo} />
        <div className="hidden md:block">
          <div className="flex gap-1.5">
            {/* Country Desktop DropDown */}
            <DropDown
              label={"Country"}
              onClick={() => toggle("Country")}
              rounded={true}
              isOpen={openDropDown === "Country"}
              items={COUNTRY}
              renderItems={(country) => {
                return (
                  <a
                    href={country.code}
                    key={country.code}
                    className="hover:bg-white/25 w-full rounded-lg py-1.5 px-2 cursor-pointer"
                  >
                    {country.name}
                  </a>
                );
              }}
            />
            {/* Category Desktop DropDown */}
            <DropDown
              label={"Category"}
              onClick={() => toggle("Category")}
              rounded={false}
              isOpen={openDropDown === "Category"}
              items={CATEGORY}
              renderItems={(category) => {
                return (
                  <a
                    href={category.code}
                    key={category.code}
                    className="hover:bg-white/25 w-full rounded-lg py-1.5 pl-8 px-2 cursor-pointer"
                  >
                    {category.name}
                  </a>
                );
              }}
            />
          </div>
        </div>
        <SearchMenu toggleMenu={() => setOpenMenu((prev) => !prev)} />
      </div>
      <div
        className={`bg-white/30 backdrop-blur-2xl rounded-xl py-4 px-6 flex justify-center ${openMenu ? "block" : "hidden"}`}
      >
        {/* Country Mobile DropDown */}
        <DropDown
          label={"Country"}
          onClick={() => {
            toggle("country");
          }}
          rounded={true}
          isOpen={openDropDown === "country"}
          items={COUNTRY}
          renderItems={(country) => {
            return (
              <a
                href={country.code}
                key={country.code}
                className="hover:bg-white/25 w-full rounded-lg py-1.5 pl-8 px-2 cursor-pointer"
              >
                {country.name}
              </a>
            );
          }}
        />
        {/* Category Mobile DropDown */}
        <DropDown
          label={"Category"}
          onClick={() => toggle("Category")}
          rounded={false}
          isOpen={openDropDown === "Category"}
          items={CATEGORY}
          renderItems={(category) => {
            return (
              <a
                href={category.code}
                key={category.code}
                className="hover:bg-white/25 w-full rounded-lg py-1.5 pl-8 px-2 cursor-pointer"
              >
                {category.name}
              </a>
            );
          }}
        />
      </div>
    </>
  );
}

export default NavBar;
