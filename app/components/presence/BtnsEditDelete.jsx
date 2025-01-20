import clsx from 'clsx'
import React from 'react'

export default function BtnsEditDelete({editOrDelete, setEditOrDelete}) {
  return (
    <>
        <div className="flex items-center justify-center py-2 ">
          <div
            className={"flex rounded-full transition-all duration-300 bg-blue_color"}>
            {/* עריכה  */}
            <div
              onClick={() => setEditOrDelete(false)}
              className={clsx(
                "text-blue_color border border-blue_color px-5 rounded-full cursor-pointer transition-all duration-300",
                {
                  "bg-white text-blue_color": !editOrDelete, 
                  "bg-blue_color text-white": editOrDelete, 
                }
              )}
            >
              עריכה
            </div>

            {/* מחיקה  */}
            <div
              onClick={() => setEditOrDelete(true)}
              className={clsx(
                "px-5 rounded-full cursor-pointer transition-all border border-blue_color duration-300",
                {
                  "bg-white text-blue_color": editOrDelete, 
                  "bg-blue_color text-white  ": !editOrDelete, 
                }
              )}
            >
              מחיקה
            </div>
          </div>
        </div>
    </>
  )
}
