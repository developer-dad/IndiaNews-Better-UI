import React from 'react'
import logo from '../assets/IndiaNews.png'
import { FaCaretDown } from "react-icons/fa6";
import { CgSearch  } from "react-icons/cg";
import { useState } from 'react';

function NavBar() {
    const [openCountry, setOpenCountry] = useState(false);
    const [openCategory, setOpenCategory] = useState(false);

    const toggleCountry = () => {
        setOpenCountry((prev) => !prev);
        setOpenCategory(false);
    }

    const toggleCategory = () => {
        setOpenCategory((prev) => !prev);
        setOpenCountry(false);
    }

  return (
    <div className='bg-white/25 border border-white/30 mx-12 mt-8 rounded-xl flex justify-between px-5 backdrop-blur-2xl'>
            <div className='flex items-center p'>
                <img src={logo} alt="Logo" className='h-16 '/>
                <p className='text-white text-2xl'>
                    India<span className='text-[#0181EB]'>News</span>
                </p>
            </div>
            <div className='flex items-center gap-5'>
                    <div className={`text-white text-[18px] border px-1 py-1 rounded-full shadow-xl ${openCountry ? "" : "shadow-white/25"}`} onClick={toggleCountry}>
                        <div className='hover:bg-white/25 flex items-center gap-1 px-4 py-0.5 rounded-full'>
                            <p>Country</p>
                            <div><FaCaretDown className={`transition-transform duration-300 ${openCountry ? "rotate-180" : "rotate-0"}`}/></div>
                            <div className={`relative ${openCountry ? "block" : "hidden"}`}>
                                <ul className='absolute w-32 top-7 -right-5 z-50 bg-white/20 flex flex-col text-end text-white gap-0.5 rounded-xl p-1 backdrop-blur-2xl border border-white/30'>
                                    <li className='hover:bg-white/25 w-full rounded-lg py-1.5 px-2 cursor-pointer'>India</li>
                                    <li className='hover:bg-white/25 w-full rounded-lg py-1.5 px-2 cursor-pointer'>Russia</li>
                                    <li className='hover:bg-white/25 w-full rounded-lg py-1.5 px-2 cursor-pointer'>USA</li>
                                    <li className='hover:bg-white/25 w-full rounded-lg py-1.5 px-2 cursor-pointer'>Chain</li>
                                    <li className='hover:bg-white/25 w-full rounded-lg py-1.5 px-2 cursor-pointer'>UK</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={`text-white text-[18px] border px-1 py-1 rounded-full shadow-xl ${openCategory ? "" : "shadow-white/25"}`} onClick={toggleCategory}>
                        <div className='hover:bg-white/25 flex items-center gap-1 px-4 py-0.5 rounded-full'>
                            <p>Category</p>
                            <div><FaCaretDown className={`transition-transform duration-300 ${openCategory ? "rotate-180" : "rotate-0"}`}/></div>
                            <div className={`relative ${openCategory ? "block" : "hidden"}`}>
                                <ul className='absolute w-44 top-7 -right-5 z-50 bg-white/20 flex flex-col text-end text-white gap-0.5 rounded-xl p-1 backdrop-blur-2xl border border-white/30'>
                                    <li className='hover:bg-white/25 w-full rounded-lg py-1.5 pl-8 px-2 cursor-pointer'>Top</li>
                                    <li className='hover:bg-white/25 w-full rounded-lg py-1.5 pl-8 px-2 cursor-pointer'>Business</li>
                                    <li className='hover:bg-white/25 w-full rounded-lg py-1.5 pl-8 px-2 cursor-pointer'>Entertainment</li>
                                    <li className='hover:bg-white/25 w-full rounded-lg py-1.5 pl-8 px-2 cursor-pointer'>Health</li>
                                    <li className='hover:bg-white/25 w-full rounded-lg py-1.5 pl-8 px-2 cursor-pointer'>Science</li>
                                    <li className='hover:bg-white/25 w-full rounded-lg py-1.5 pl-8 px-2 cursor-pointer'>Sports</li>
                                    <li className='hover:bg-white/25 w-full rounded-lg py-1.5 pl-8 px-2 cursor-pointer'>Techhnology</li>
                                </ul>
                            </div>
                        </div>
                    </div>
            </div>
            <div className='border flex my-3 mr-4 rounded-full px-2 text-white items-center'>
                <div><CgSearch size={27} /></div>
                <input type="text" placeholder="Search..." className='rounded-full px-2'/>
            </div>
    </div>
  )
}

export default NavBar