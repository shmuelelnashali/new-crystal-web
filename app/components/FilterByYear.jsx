import { ArrowLeft, ArrowRight } from 'lucide-react'
import React from 'react'

export default function FilterByYear({selectedDate,goToNextYear ,goToPreviousYear}) {
  return (
    <div className="flex justify-center  ">
    <div className="border w-min p-[1px] rounded-full  text-white bg-[#002A78] flex justify-center items-center">
      <button onClick={goToPreviousYear}>
        <ArrowRight />
      </button>
      <p className="border  bg-white font-bold text-[#002A78]  rounded-full px-16">
        {selectedDate.getFullYear()}
      </p>
      <button onClick={goToNextYear}>
        <ArrowLeft />
      </button>
    </div> </div>
  )
}
