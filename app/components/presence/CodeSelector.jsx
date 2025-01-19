import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import ToggleCode from "./ToggleCode";

export function CodeSelector({ value, onChange, isOpen, setIsOpen }) {
  
  // const [isOpen, setIsOpen] = useState(false);
  // const buttonRef = useRef(null);

  // const handleCodeSelect = (code) => {
  //   onChange(code);
  //   setIsOpen(false);
  // };

    // useEffect(() => {
    //   if (isOpen && buttonRef.current) {
    //     const rect = buttonRef.current.getBoundingClientRect();
    //     document.documentElement.style.setProperty('--dropdown-top', `${rect.bottom + 4}px`);
    //     document.documentElement.style.setProperty('--dropdown-left', `${rect.left}px`);
    //     document.documentElement.style.setProperty('--dropdown-width', `${rect.width}px`);
    //   }
    // }, [isOpen]);

  return (
    <>
      {/* <div className=" "> */}
      <div
      // ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        className="bg-white  hover:cursor-pointer flex border border-blue_color rounded-full items-center relative w-full"
      >
        <div className="w-full text-center">{value || "-"}</div>
        <Image
          src="/downArrow.svg"
          width={10}
          height={10}
          alt="arrow"
          className="absolute left-2"
        />
      </div>

      {/* </div> */}
      {/* {isOpen && (
        <ToggleCode
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          onSelect={handleCodeSelect}
        />
      )} */}
    </>
  );
}
