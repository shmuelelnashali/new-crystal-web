import Image from 'next/image'
import React from 'react'

export default function But({text,image, bg}) {
  return (
        <button className={`bg-[#002A78] text-white rounded-full flex py-1 px-6 text-lg`}>
         {text}
         {/* {image} */}
        </button>
  )
}
