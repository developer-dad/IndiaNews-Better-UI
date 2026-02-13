import React from 'react'
import {COUNTRY, CATEGORY} from '../../Data/assets'

const DropDown = ({ modal, Clicked }) => {

    let data = []
    
    if(Clicked === 'Country'){
        data = COUNTRY
    }else if(Clicked === 'Category'){
        data = CATEGORY
    }

  return (
    modal && (
    <div className='flex flex-col text-center text-white/85 text-lg'>
        {data.map((list, index) => (
            <div key={index}>
            <hr className='text-white/75'/>
            <a href={list.code} key={index}>
                {list.name}
            </a>
            </div>
        ))}
    </div>
    )
  )
}

export default DropDown