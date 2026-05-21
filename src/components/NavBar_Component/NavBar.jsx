import React, { useEffect, useState, useRef } from "react";
import { delay, easeIn, easeInOut, motion } from "motion/react";
import SearchModal from "./SearchModal";
import Menu from "./Menu";
import { IoSearchSharp } from "react-icons/io5";
import { RiMenuFill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { TiArrowSortedDown } from "react-icons/ti";
import { LABEL } from "../../Data/assets";
import DropDown from "./DropDown";
import { CiBookmark } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import { FaGoogle } from "react-icons/fa";

const NavBar = ({
  setCountry,
  setCategory,
  setQ,
  setCountryName,
  setCategoryName,
  auth,
  setAuth,
  topmargin,
}) => {
  const [searchModal, setSearchModal] = useState(false);
  const [menuModal, setMenuModal] = useState(false);
  const [openDropDown, setOpenDropDown] = useState(false);
  const [labelClicked, setLabelClicked] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const inputRef = useRef(null);

  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.removeItem("token");
    setAuth(false);
    window.location.href = "/";
  };

  useEffect(() => {
    if (searchModal) {
      inputRef.current?.focus();
    }
  }, [searchModal]);

  // Used for Login
  const handleLogIn = async (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      const res = await BACKEND_URL.post("/user/login", {
        email,
        password,
      });

      localStorage.setItem("token", res.data.accessToken);

      navigate("/");
    } catch (error) {
      setError(error.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const divVarients = {
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        ease: "easeIn",
        delay: 0.15,
      },
    },
    hidden: {
      opacity: 0,
      scale: 0.95,
    },
  };

  return (
    <div className="relative z-50">
      {/*  Navbar Main Div */}
      <motion.div
        variants={divVarients}
        initial="hidden"
        animate="show"
        className={`select-none bg-white/20 backdrop-blur-xl w-full min-h-18 ${topmargin} rounded-xl border border-white/25 md:mt-10`}
      >
        {/* Div Holding Text, Logo & both Buttons together */}
        {!searchModal && (
          <div className="flex justify-between items-center md:mr-5">
            {/* Div for Text & Logo */}
            <div
              className="flex justify-center items-center cursor-pointer hover:scale-102"
              onClick={() => {
                setCountry("in");
                setCountryName("India");
                setCategory("top");
                setCategoryName("Top");
              }}
            >
              <img
                src="logo.png"
                alt="Logo"
                className="size-18 overflow-hidden items-center"
              />
              <p className="text-white text-2xl md:text-3xl md:px-1 md:rounded-l-lg">
                NewsStack<span className="text-blue-600">India</span>
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
                      if (labelClicked === label) {
                        setOpenDropDown((prev) => !prev);
                      } else {
                        setLabelClicked(label);
                        setOpenDropDown(true);
                      }
                    }}
                    className={`cursor-pointer flex items-center gap-1.5 bg-white/15 px-3 text-lg py-1 shadow-lg shadow-white/25 border border-white/50 text-white/80 rounded-full ${index === 0 ? "rounded-r-none" : index === 1 ? "rounded-l-none" : ""}`}
                  >
                    {label}
                    <TiArrowSortedDown
                      className={`transition-transform duration-200 ${openDropDown && labelClicked === label ? "rotate-180" : "rotate-0"}`}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Search + Actions For Desktop */}
            <div className="hidden md:flex items-center gap-3">
              {/* Search Input */}
              <div className="relative flex items-center">
                <IoSearchSharp className="absolute size-6 text-white mx-2 cursor-pointer" />
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      setQ(inputValue);
                    }
                  }}
                  placeholder="Search..."
                  className="focus:outline-blue-600 py-1.5 px-9 rounded-full placeholder:text-white/75 border border-white/40 shadow-lg shadow-white/20 text-white bg-white/10"
                />
              </div>

              {/* Saved News */}
              <Link
                to="/savednews"
                className="flex items-center gap-1.5 p-1.5 rounded-full bg-white/15 hover:bg-white/25 border border-white/40 text-white shadow-lg shadow-white/20 transition"
              >
                <CiBookmark size={21} />
              </Link>

              {/* Login / Signup */}
              <Link
                onClick={auth ? handleLogOut : () => navigate("/login")}
                className="px-4 py-1.5 rounded-full bg-blue-600/70 hover:bg-blue-600 text-white text-sm font-medium border border-blue-300/40 shadow-lg shadow-blue-500/30 transition"
              >
                {auth ? (
                  <div onClick={handleLogOut} className="flex justify-center items-center gap-1.5">
                    <FiLogOut />
                    <p>Log Out</p>
                  </div>
                ) : (
                  <Link to="/login" className="flex justify-center items-center gap-1.5">
                    <FaGoogle />
                    <p>LogIn / SignUp</p>
                  </Link>
                )}
              </Link>
            </div>
          </div>
        )}

        {/* Search Modal Component */}
        <SearchModal
          modal={searchModal}
          onClickClose={() => setSearchModal(false)}
          inputRef={inputRef}
          setQ={setQ}
          inputValue={inputValue}
          setInputValue={setInputValue}
          setSearchModal={setSearchModal}
        />

        {/* DropDown Component for desktop */}
        <DropDown
          modal={openDropDown}
          Clicked={labelClicked}
          setCountry={setCountry}
          setCategory={setCategory}
          setCountryName={setCountryName}
          setCategoryName={setCategoryName}
          setOpenDropDown={setOpenDropDown}
        />
      </motion.div>
      {/* Menu Component */}
      <Menu
        modal={menuModal}
        setCountry={setCountry}
        setCategory={setCategory}
        setCountryName={setCountryName}
        setCategoryName={setCategoryName}
        setMenuModal={setMenuModal}
        setOpenDropDown={setOpenDropDown}
        auth={auth}
        setAuth={setAuth}
      />
    </div>
  );
};

export default NavBar;
