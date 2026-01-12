import React from 'react'
import { useState } from 'react';
import { FaMapMarkedAlt } from "react-icons/fa";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { IoIosClose } from "react-icons/io";

function Toast() {

    const [Toast, setToast] = useState(true)

    const toggleToast = () => {
        setToast(false)
        setTimeout(() => {
            setToast(false)
        }, 3000)
    }

  return (
        <div className={`z-50 absolute inset-0 w-fit h-fit top-10 left-8/12 rounded-xl shadow-2xl shadow-black ${Toast ? "block" : "hidden"}`}>
            <div className='fixed flex items-center gap-5 bg-black/40 border border-white/40 rounded-xl px-10 py-5 backdrop-blur-2xl inset-shadow-sm inset-shadow-white/40'>
                <FaMapMarkedAlt color='white' size={30}/>
                <p className='text-white text-xl'>
                    Country changed to India.
                </p>
                <IoIosClose color='white' size={25} className='hover:bg-white/40 cursor-pointer rounded-full' onClick={toggleToast}/>
            </div>
        </div>
  )
}

export default Toast