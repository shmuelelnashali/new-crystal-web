"use client";
import { useAuthContext } from "@/app/hooks/AuthContext";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Nav() {
  const pathName = usePathname();
  const { user } = useAuthContext();

  const navBar = [
    { text: "נוכחות", link: "/presence" },
    { text: "עובדים", link: "/employees" },
    { text: " ניהול משימות", link: "/mission" },
    { text: "דרישות אמצעים", link: "/financialRequirements" },
    { text: "ניהול עץ אירגוני", link: "/organizationTree" },
    { text: "ניהול לוחות שנה", link: "/calender" },
    { text: "דוחות", link: "/reports" },
    { text: "הגדרות", link: "/settings" },
  ];
  // console.log(pathName);
  // console.log(user);
  // const router = useRouter();
  // useEffect(() => {
  //   if (!user) {
  //     router.push("/login");
  //   }
  // }, []);
  return (
    <div className="rounded-l-full rounded-r-full text-base  bg-[#EFF3FB] px-6 py-2.5">
      <ul className="flex gap-x-8 justify-around items-center h-full text-blue_color/30  ">
        {navBar.map((nav, index) => (
          <Link key={index} href={user ? nav.link : "/login"}>
            {/* // <Link key={index} href={nav.link}> */}
            <li
              className={`whitespace-nowrap ${
                pathName.includes(nav.link) ? "nav" : ""
              } `}
            >
              {nav.text}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
