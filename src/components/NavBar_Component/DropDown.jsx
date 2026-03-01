import React from "react";
import { COUNTRY, CATEGORY } from "../../Data/assets";

const DropDown = ({ modal, Clicked, setCountry, setCategory, setCountryName, setCategoryName, setOpenDropDown }) => {
  let data = []
  if(Clicked === "Country"){
    data = COUNTRY
  }else if(Clicked === "Category"){
    data = CATEGORY
  }

  return (
    modal && (
      <div className="flex flex-col text-center text-white/85 text-lg">
        {data.map((list, index) => {
          const lastId = index === data.length - 1;
          return (
            <div
              key={index}
              onClick={() => {
                setOpenDropDown(false)
                if (Clicked === "Country") {
                  setCountry(list.code);
                  setCountryName(list.name)
                } else if (Clicked === "Category") {
                  setCategory(list.code);
                  setCategoryName(list.name)
                }
              }}
              className="cursor-pointer hover:text-black"
            >
              {list.name}
              {!lastId && <hr className="text-white/75" />}
            </div>
          );
        })}
      </div>
    )
  );
};

export default DropDown;
