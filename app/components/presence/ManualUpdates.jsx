import React from 'react'

export default function ManualUpdates({}) {
  return (
    <div className="">
    <div className="bg-blue_color text-white py-2 mx-1 my-1 rounded-lg flex items-center justify-around">
      <div className="flex flex-col items-center justify-center">
        <div>נתון מקור </div>
        <div>שעבר שינוי</div>
      </div>
      <div className="font-semibold">כניסה 1</div>
      <div>10:00</div>
    </div>
    <div className="bg-[#E4EBF8] font-semibold py-1 mx-1 my-1 rounded-full flex items-center justify-around">
      <div className="">עודכן ב</div>
      <div className="">עודכן ע"י</div>
      <div>החתמות</div>
    </div>
  </div>
  )
}
