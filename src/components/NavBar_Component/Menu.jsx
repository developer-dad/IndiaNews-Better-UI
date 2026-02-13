import React, { useState } from 'react'
import DropDown from './DropDown';
import { LABEL } from '../../Data/assets';
import { TiArrowSortedDown } from "react-icons/ti";

const Menu = ({ modal }) => {
    const [openDropDown, setOpenDropDown] = useState(false);
    const [labelClicked, setLabelClicked] = useState(null)

  return (
    <>
    {/* Menu Div */}
    {modal && (
        <>
    <div className='flex justify-around bg-white/15 backdrop-blur-2xl text-xl py-8 px-8 space-x-3 rounded-xl'>
        {/* DropDown Element of Div */}
        {LABEL.map((label, index) => (   
        <p key={index} onClick={() => {setOpenDropDown(prev => !prev); setLabelClicked(label)}} className='flex justify-center items-center gap-2 border text-white border-white/45 py-2 px-3 rounded-2xl shadow-lg shadow-black/20'>
            {label}
            <TiArrowSortedDown/>
        </p>
        ))} 
    </div>
    <DropDown modal={openDropDown} Clicked={labelClicked}/>
    </>
    )}
    </>
  )
}

export default Menu