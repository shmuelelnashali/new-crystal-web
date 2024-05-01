import Image from 'next/image'
import React from 'react'

export default function PopupMissin() {
  return (
    <div className='w-96 flex flex-col gap-y-1 absolute top-0 left-0 bg-slate-100 h-full p-2 z-40'>
    
         
        <div className=''>
        <Image
          src={"./x.svg"}
          width={15}
          height={15}/>
        </div>
         <div className='flex justify-center items-center' >
          <Image
          src={"./logo.svg"}
          width={220}
          height={54}/>
        </div>
        <div className='flex justify-center items-center'>
          משימות 
        </div>
        <div className='flex justify-center items-center'>
         {"ישראל"} | { 12345}  
        </div>
        <div className='flex justify-center items-center'>

        </div>
        <div className='flex justify-center items-center'>

        </div>
        <div className=''></div>
    
    </div>
  )
}
