import React from "react";

function TextLogo({ Logo }) {
  return (
    <div className="flex items-center">
      <img src={Logo} alt="Logo" className="h-14 md:h-20" />
      <p className="text-white text-xl md:text-3xl">
        India<span className="text-[#0181EB]">News</span>
      </p>
    </div>
  );
}

export default TextLogo;
