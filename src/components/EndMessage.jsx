import React from 'react'

const EndMessage = ({ msg }) => {
  return (
    <div className="flex justify-center gap-2 items-center my-3 text-white">
      <div className="h-px w-full bg-white" ></div>
      <p className="w-full text-center text-xl md:text-2xl">
        {msg}
      </p>
      <div className="h-px w-full bg-white"></div>
    </div>
  )
}

export default EndMessage