import React from 'react'
import logo from '../assets/IndiaNews.png'
import { FaCaretDown } from "react-icons/fa6";
import { CgSearch  } from "react-icons/cg";

function NavBar() {
  return (
    <div className='bg-white/25 border border-white/50 mx-12 mt-8 rounded-xl flex justify-between px-5'>
            <div className='flex items-center p'>
                <img src={logo} alt="Logo" className='h-16 '/>
                <p className='text-white text-2xl'>
                    India<span className='text-[#0181EB]'>News</span>
                </p>
            </div>
            <div className='flex items-center gap-5'>
                    <div className='text-white text-[18px] border px-1 py-1 rounded-full'>
                        <div className='hover:bg-gray-400/50 flex items-center gap-1 px-4 py-0.5 rounded-full'>
                            <p>Country</p>
                            <div><FaCaretDown/></div>
                        </div>
                    </div>
                    <div className='text-white text-[18px] border px-1 py-1 rounded-full'>
                        <div className='hover:bg-gray-400/50 flex items-center gap-1 px-4 py-0.5 rounded-full'>
                            <p>Category</p>
                            <div><FaCaretDown/></div>
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