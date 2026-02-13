import React from 'react'

const Loader = ({ paddingY }) => {
  return (
    <div className={`flex flex-row gap-2 items-center justify-center ${paddingY}`}>
      <div className="w-4 h-4 rounded-full bg-white/75 animate-bounce [animation-delay:.6s]"></div>
      <div className="w-4 h-4 rounded-full bg-white animate-bounce [animation-delay:.3s]"></div>
      <div className="w-4 h-4 rounded-full bg-white/75 animate-bounce [animation-delay:.6s]"></div>
    </div>
  )
}

export default Loader