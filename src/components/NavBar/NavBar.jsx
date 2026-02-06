import React, { useState } from "react";
import { Link } from "react-router-dom";
import TextLogo from "./TextLogo";
import SearchMenu from "./SearchMenu";
import DropDown from "./DropDown";
import Logo from "../../assets/IndiaNews.png";

function NavBar() {
  const [openMenu, setOpenMenu] = useState(false);
  const [openDropDown, setOpenDropdown] = useState(null);

  let CATEGORY = [
    { code: "top", name: "Top" },
    { code: "business", name: "Business" },
    { code: "entertainment", name: "Entertainment" },
    { code: "health", name: "Health" },
    { code: "science", name: "Science" },
    { code: "sports", name: "Sports" },
    { code: "technology", name: "Technology" },
  ];
  let COUNTRY = [
    { code: "in", name: "India" },
    { code: "us", name: "USA" },
    { code: "ru", name: "Russia" },
    { code: "gb", name: "UK" },
    { code: "cn", name: "China" },
  ];

  const toggle = (type) => {
    setOpenDropdown((prev) => (prev === type ? null : type));
  };

  return (
    <div
      className="relative z-50 select-none"
    >
      <div
        className={`z-50 bg-white/25 border border-white/30 rounded-xl flex justify-between items-center backdrop-blur-2xl mt-5 mx-4 md:mx-28 md:mt-12}`}
      >
        <TextLogo Logo={Logo} />
        <div className="hidden md:block">
          <div className="flex gap-1.5">
            {/* Country Desktop */}
            <DropDown
              label={"Country"}
              onClick={() => toggle("Country")}
              rounded={true}
              isOpen={openDropDown === "Country"}
              items={COUNTRY}
              renderItems={(country) => {
                return (
                  <Link
                    to={country.code}
                    key={country.code}
                    className="hover:bg-white/25 w-full rounded-lg py-1.5 px-2 cursor-pointer"
                  >
                    {country.name}
                  </Link>
                );
              }}
            />
            {/* Category Desktop */}
            <DropDown
              label={"Category"}
              onClick={() => toggle("Category")}
              rounded={false}
              isOpen={openDropDown === "Category"}
              items={CATEGORY}
              renderItems={(category) => {
                return (
                  <Link
                    to={category.code}
                    key={category.code}
                    className="hover:bg-white/25 w-full rounded-lg py-1.5 pl-8 px-2 cursor-pointer"
                  >
                    {category.name}
                  </Link>
                );
              }}
            />
          </div>
        </div>
        <SearchMenu
          toggleMenu={() => {
            setOpenMenu((prev) => !prev);
          }}
        />
      </div>
    </div>
  );
}

export default NavBar;