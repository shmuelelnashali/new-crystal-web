"use client";

import clsx from "clsx";

export default function Search({
  textBtn,
  addNew,
  addImage,
  bg,
  searchText,
  missionDay,
}) {
  return (
    <div
      className={clsx(
        "w-full justify-center flex  h-10 border border-white relative rounded-full items-center ",
        {
          " bg-gradient-to-r from-blue_color via-blue_color to-[#EFF3FB]":
            !missionDay,
        }
      )}
    >
      <input
        className={clsx(
          "rounded-full pr-2 outline-none h-full placeholder:text-blue_color w-full bg-[#EFF3FB]",
          { "bg-white border": bg },
          { "w-[85%]": !missionDay }
        )}
        placeholder={searchText}
      />

      {!missionDay && (
        <button
          onClick={(e) => {
            e.stopPropagation(), addNew();
          }}
          className="justify-center flex px-5 items-center gap-1 whitespace-nowrap left-0 text-gray-100 font-normal  text-[20px] "
        >
          {textBtn}
          {addImage}
        </button>
      )}
    </div>
  );
}
