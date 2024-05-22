"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

export default function Nav() {
 
 const pathName= usePathname()

  const navBar = [
    { text: "נוכחות", link: "/presence" },
    { text: "עובדים", link: "/employees" },
    { text: "הרשאות", link: "/permissions" },
    { text: " ניהול משימות", link: "/mission" },
    { text: "ניהול העדרויות", link: "/absenceManagement" },
    { text: "ניהול הסכמים ", link: "/agreementsManagement" },
    { text: "ניהול עץ אירגוני", link: "/organizationTree" },
    { text: "ניהול לוחות שנה", link: "calendar" },
    { text: "דוחות", link: "/reports" },
  ];

  return (
    <div className=" h-10 rounded-l-full rounded-r-full text-base  bg-[#EFF3FB] px-6">
      <ul className="flex gap-x-8 justify-around items-center h-full text-[#002A78]/30  ">
        {navBar.map((nav, index) => (
          <Link key={index} href={nav.link}>
            <li  className={` ${nav.link==pathName ?"nav":""} `}>{nav.text}</li>
          </Link>
        ))}

      </ul>
    </div>
  );
}

