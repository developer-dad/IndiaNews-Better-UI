import React, { useEffect, useRef } from 'react'
import { useState } from 'react';
import { FaMapMarkedAlt } from "react-icons/fa";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { IoSearchSharp } from "react-icons/io5";
import { IoIosClose } from "react-icons/io";

const Toast = ({countryName, categoryName, q}) => {
 
    const [showToast, setShowToast] = useState(false)
    const [message, setMessage] = useState('')
    const [Icon, setIcon] = useState(null)
    const isFirstRender = useRef(true)
    const prevValue = useRef({countryName, categoryName, q})
    
    useEffect(() => {

        if(isFirstRender.current){
            isFirstRender.current = false
            prevValue.current = {countryName, categoryName, q}
            return
        }
        
        let msg = ''
        let Logo = null
        if(prevValue.current.countryName !== countryName){
            msg = `Country Changed to ${countryName}`
            Logo = <FaMapMarkedAlt/>
        }
        else if(prevValue.current.categoryName !== categoryName){
            msg = `Category Changed to ${categoryName}`
            Logo = <BiSolidCategoryAlt/>
        }
        else if(prevValue.current.q !== q){
            msg = `Search Result for ${q}`
            Logo = <IoSearchSharp/>
        }
        
        if(msg !== ''){
            setMessage(msg)
            setIcon(Logo)
            setShowToast(true)
            
            setTimeout(() => {
                setShowToast(false)
            }, 2500)
        }
    
        prevValue.current = {countryName, categoryName, q}
        
    }, [countryName, categoryName, q])


  return (
        <div className={`z-50 absolute inset-0 top-10 left-10 w-fit h-fit rounded-xl ${showToast ? "block" : "hidden"} md:top-14 md:left-8/12`}>
            <div className='fixed flex items-center bg-black/40 border border-white/40 rounded-xl backdrop-blur-2xl inset-shadow-sm inset-shadow-white/40 shadow-2xl shadow-black/25 px-4 py-3 gap-3 md:px-8 md:py-5 md:gap-6'>
                {Icon && <Icon color='white' className='size-7 md:size-8'/>}
                <p className='text-white text-md md:text-xl'>
                    {message}
                </p>
                <IoIosClose color='white' className='bg-white/10 cursor-pointer rounded-full size-7 border border-white/25 md:border-transparent md:bg-transparent md:hover:bg-white/30 md:hover:border md:hover:border-white/50' onClick={() => setShowToast(false)}/>
            </div>
        </div>
  )
}

export default Toast