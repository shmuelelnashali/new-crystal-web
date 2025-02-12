import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import ToggleCode from "./ToggleCode";

export function CodeSelector({ value, onClick, isOpen, setIsOpen }) {
  
  // const buttonRef = useRef(null);

    // useEffect(() => {
    //   if (isOpen && buttonRef.current) {
    //     const rect = buttonRef.current.getBoundingClientRect();
    //     document.documentElement.style.setProperty('--dropdown-top', `${rect.bottom + 4}px`);
    //     document.documentElement.style.setProperty('--dropdown-left', `${rect.left}px`);
    //     document.documentElement.style.setProperty('--dropdown-width', `${rect.width}px`);
    //   }
    // }, [isOpen]);
// console.log(value,"na");

  return (
    
      <div
      // ref={buttonRef}
        onClick={(e) => {onClick(e), setIsOpen(!isOpen)}}
        className="bg-white  hover:cursor-pointer flex border border-blue_color truncate rounded-full items-center relative w-full"
      >
        <div className="w-full text-center truncate pl-5 pr-2">{value?.name || '-' }</div>
        <Image
          src="/downArrow.svg"
          width={10}
          height={10}
          alt="arrow"
          className="absolute left-2"
        />
      </div>


);
}
{/* {isOpen && (
  <ToggleCode
    isOpen={isOpen}
    onClose={() => setIsOpen(false)}
    onSelect={handleCodeSelect}
  />
)} */}
