import React from 'react'
import { useState } from 'react';
import { FaMapMarkedAlt } from "react-icons/fa";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { IoIosClose } from "react-icons/io";

const Toast = () => {

    const [Toast, setToast] = useState(true)

  return (
        <div className={`z-50 absolute inset-0 top-10 left-18 w-fit h-fit rounded-xl ${Toast ? "block" : "hidden"} md:top-14 md:left-8/12`}>
            <div className='fixed flex items-center bg-black/40 border border-white/40 rounded-xl backdrop-blur-2xl inset-shadow-sm inset-shadow-white/40 shadow-2xl shadow-black/25 px-4 py-3 gap-3 md:px-8 md:py-5 md:gap-6'>
                <FaMapMarkedAlt color='white' className='size-7 md:size-8'/>
                <p className='text-white text-md md:text-xl'>
                    Country changed to India.
                </p>
                <IoIosClose color='white' className='bg-white/10 cursor-pointer rounded-full size-7 border border-white/25 md:border-transparent md:bg-transparent md:hover:bg-white/30 md:hover:border md:hover:border-white/50' onClick={() => setToast(false)}/>
            </div>
        </div>
  )
}

export default Toast