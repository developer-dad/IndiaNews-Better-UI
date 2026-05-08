import React, { useState } from "react";
import { AnimatePresence, easeIn, easeOut, motion } from "motion/react";
import DropDown from "./DropDown";
import { CATEGORY, COUNTRY, LABEL } from "../../Data/assets";
import { TiArrowSortedDown } from "react-icons/ti";
import { CiBookmark } from "react-icons/ci";
import { FiLogOut } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { CiLogin } from "react-icons/ci";

const Menu = ({
  modal,
  setCountry,
  setCategory,
  setCountryName,
  setCategoryName,
  setMenuModal,
  setOpenDropDown,
  auth,
  setAuth
}) => {
  const [labelClicked, setLabelClicked] = useState(null);

  const handleLogOut = () => {
    localStorage.removeItem("token")
    setAuth(false)
    window.location.href = '/'
    setMenuModal(false)
  }

  const handleLogIn = () => {
    window.location.href = '/login'
    setMenuModal(false)
  }

  const menuVariant = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        duration: 0.35,
        easeOut,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.25,
        easeIn,
      },
    },
  };

  return (
    <AnimatePresence>
      {/* Menu Div */}
      {modal && (
        <>
          <motion.div
            variants={menuVariant}
            animate="show"
            initial="hidden"
            exit="exit"
            className="absolute top-full -right-4 mt-3 z-999 mx-4 w-full backdrop-blur-md border border-white/25 bg-white/15 text-xl py-5 px-6 rounded-xl"
          >
            {/* Country Section */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <p className="text-white font-semibold text-lg">Country</p>
                <span className="text-white/50 text-sm">Choose region</span>
              </div>

              <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-2">
                {COUNTRY.map((country) => (
                  <button
                    key={country.code}
                    className="min-w-20 h-16 relative overflow-hidden rounded-2xl bg-white/90 hover:bg-white text-black font-semibold shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center"
                    onClick={() => {
                      setOpenDropDown(false);
                      setMenuModal?.(false);
                        setCountry(country.code);
                        setCountryName(country.name);
                    }}
                  >
                    <img
                      src={country.logo}
                      alt={country.name}
                      className="absolute object-cover w-full h-full scale-120 rounded-2xl"
                    />
                    <div className="w-full h-full absolute bg-black/45 rounded-2xl" />
                    <p className="z-10 text-white">{country.name}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Category Section */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <p className="text-white font-semibold text-lg">Category</p>
                <span className="text-white/50 text-sm">Pick topic</span>
              </div>

              <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-2">
                {CATEGORY.map((category) => (
                  <button
                    key={category.code}
                    className="min-w-fit h-16 relative rounded-2xl bg-white/90 hover:bg-white text-black font-semibold shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center px-4"
                    onClick={() => {
                      setOpenDropDown(false);
                      setMenuModal?.(false);
                        setCategory(category.code);
                        setCategoryName(category.name);
                    }}
                  >
                    <img
                      src={category.logo}
                      alt={category.name}
                      className="absolute object-cover w-full h-full rounded-2xl"
                    />
                    <div className="w-full h-full absolute bg-black/45 rounded-2xl" />
                    <p className="z-10 text-white">{category.name}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Saved News */}
            <Link
              to="/savednews"
              className="flex justify-center items-center gap-1.5 w-full border border-white/45 rounded-lg text-center py-1.5 bg-white/45 mt-4"
            >
              <CiBookmark size={25} />
              Saved News
            </Link>

            {/* Log Out */}
            <div onClick={auth ? handleLogOut : handleLogIn} className={`flex justify-center items-center gap-1.5 w-full border border-white/45 rounded-lg text-center py-1 bg-blue-600/75 text-white mt-3`}>
              {auth ? <>
                <FiLogOut size={25} />
                <p>Log Out</p>
              </> : <>
                <CiLogin size={25}/>
                LogIn / SignUp
              </>}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Menu;
