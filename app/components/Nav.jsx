import Link from 'next/link'
import React from 'react'

export default function Nav() {
  return (
    <div className=' h-10 rounded-l-full rounded-r-full text-base  bg-[#EFF3FB] px-6'>
      <ul className='flex gap-x-6 justify-around items-center h-full text-[#002A78]/30 '>
        <Link href={"/presence"}><li className=''>נוכחות</li></Link>
        <Link href={"/employees"}> <li className=''>עובדים</li></Link>
        <Link href={"/permissions"}> <li className=''>הרשאות</li></Link>
        <Link href={"/mission"}><li className=''>ניהול משימות</li></Link>
        <Link href={"/absenceManagement"}><li className=''>ניהול היעדרויות</li></Link>
        <Link href={"/agreementsManagement"}><li className=''>ניהול הסכמים</li></Link>
        <Link href={"/organization"}><li className=''>ניהול עץ אירגוני</li></Link>
        <Link href={"/calendar"}><li className=''>ניהול לוחות שנה</li></Link>
        <Link href={"/reports"}><li className=''>דוחות</li></Link>
      </ul>


    </div>
  )
}
