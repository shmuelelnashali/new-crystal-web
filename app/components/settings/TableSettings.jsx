'use client'
import Image from 'next/image'
import React, { useState } from 'react'

export default function TabieSettings({data, headers}) {
  const [updateRow, setUpdateRow]= useState()
  return (
    <div>
        <div className="flex-1 flex flex-col overflow-hidden  rounded-lg">
          <div className=" px-2  dirLtr h-full rounded-2xl overflow-auto">
            <div className=" dirRtl bg-[#EFF3FB] rounded-lg ">
              <div className="p-2 pb-0 text-white rounded-lg sticky top-0 bg-[#EFF3FB] w-full">
                <div className="grid grid-cols-9  sticky top-0 rounded-lg p-2 bg-blue_color justify-center ">
                  {headers.map((header, index) => (
                    <div
                      key={header}
                      className=" text-center font-semibold text-xl"
                    >
                      {header}
                    </div>
                  ))}
                  <div
                    className="text-center  col-end-10
                 "
                  >
                    פעולות
                  </div>
                </div>
              </div>
              <div className="flex flex-col px-2   ">
                {data.map((code, rowIndex) => (
                  <div
                    key={rowIndex}
                    className="grid grid-cols-9 justify-center border-b-[2px] py-2.5"
                  >
                    
                    {Object.entries(code).map(([code_key, code_value], index) =>(
                       <div className={`${index === Object.entries(code).length - 1 &&updateRow===rowIndex&&"col-span-2"}`}>
                      {updateRow===rowIndex?(
                      
                      <div className='flex w-full items-center justify-center px-2'>
                      <div className={`${index === Object.entries(code).length - 1 &&'bg-blue_color'}`}>  
                      <input className={`"text-center  rounded-full border border-blue_color"${index !== Object.entries(code).length - 1 &&"w-full" }`} value={code_value}/>
                      </div>
                      </div>
                        ):(
                      <div key={index} className="text-center">{code_value}</div>)}
                      </div>
))}
                    <div className="flex  carsor justify-around col-end-10 ">
                      <div className=" gap-1 flex px-3 w-fit text-white rounded-full cursor-pointer bg-blue_color"
                        onClick={() => {
                          setUpdateRow(rowIndex);
                          console.log(updateRow);
                        }}
                        
                      >
                        <Image
                          src={"/editing.svg"}
                          width={15}
                          height={16}
                          alt={"uu"}
                        />
    
                        <p>עריכת שורה</p>
                      </div>
                      <Image src={"/bit.svg"} width={15} height={16} alt={"uu"}/>
                    </div>
                  </div>
                ))}
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>)
  
}
