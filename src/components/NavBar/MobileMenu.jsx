import React from "react";
import DropDown from "./DropDown";

function MobileMenu({label, onClick, rounded, isOpen, items, renderItems}) {
  return (
    <div>
      <DropDown
        label={label}
        onClick={onClick}
        rounded={rounded}
        isOpen={isOpen}
        items={items}
        renderItems={renderItems}
      />
    </div>
  );
}

export default MobileMenu;
