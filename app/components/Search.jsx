'use client'

export default function Search({textBtn, addNew, addImage, bg, searchText}) {
  return (
    <div className="w-3/5 h-11 flex relative rounded-full text  items-center">

      <input className= 
      {`outline-none w-[85%] absolute z-10  rounded-full ${bg? "bg-white border":"bg-[#EFF3FB]"} leading-5 p-2 placeholder:text-[#002A78]`} 
      placeholder={searchText}
      />

      <button 
      onClick={(e)=>
        {e.stopPropagation(),
          addNew()
        }}
      className="w-[20%] flex justify-center gap-2 items-center absolute pr-[4%] py-2 p-1 left-0 text-gray-100 font-normal leading-5 text-[20px] bg-[#002A78] rounded-l-full">
        <div>{textBtn}</div>
        <div>{addImage}</div>
      </button>
    </div>
  );
}
