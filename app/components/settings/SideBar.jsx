`use client`
import Link from "next/link";
// import { useRouter } from "next/navigation";
import React from "react";

export default function SideBar() {
    
  const sideBar = [
    { text: "משתמשים", link: "" },
    { text: "ימי עמדה", link: "" },
    { text: "לקוחות", link: "" },
    { text: " שלבים למדור", link: "" },
    { text: " הוצאות אחרות", link: "" },
    { text: " שעות עבודה", link: "" },
    { text: "מספרי דרישה", link: "" },
    { text: "ארכיון", link: "/activity_code" },
    { text: "ניהול עץ אירגוני", link: "/activity_code" },
    { text: "ניהול הסכמים", link: "/activity_code" },
    { text: "ניהול קודי פעילות", link: "/activity_code" },
  ];
  sideBar.map((nav,index)=>{
    console.log(nav,index)
  })
  // const router = useRouter()
  return (
    <div className=" bg-[#EFF3FB]  whitespace-nowrap rounded-2xl  px-2">
      <div className="w-full h-full dirLtr overflow-auto ">
        <div className="p-2 text-[22px] dirRtl  ">
          {sideBar.map((nav, index) => (
            <Link key={index} href={`settings/${nav.link}`}>
              <div  className=" m-2 py-3 pl-5 pr-3 rounded-md hover:bg-blue_color hover:text-white hover:font-semibold">
              {nav.text}
            </div>
          </Link>
        ))}
        </div>
      </div>
    </div>
  );
}
