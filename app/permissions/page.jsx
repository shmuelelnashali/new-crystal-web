import Image from "next/image";
import React from "react";
import Search from "../components/Search";
import But from "../components/But";

export default function page() {
  const inputs=[
  "מספר עובד",
  "שם מלא",
  "הרשאות",
  " מחלקות",
  " ענפים",
  " מדורים",

  ]
  return (
    <div className=" h-[70%]">
      <div className="text-center text-3xl font-semibold">הרשאות</div>
        <div className="h-24 w-full flex justify-center m-2">
        <Search
        textBtn={"הוסף משתמש"}
        bg={1}  
        // addImage={"/plus.svg"}
        
        />
      </div>
      <div className="bg-[#F4F7FC] h-full flex flex-col text-sm justify-around items-center text-center  rounded-2xl w-2/5  mx-auto px-20 ">
        <div>
          <Image
            src={"./profilePicture.svg"}
            width={100}
            height={50}
            alt="profile picture"
          />
        </div>
        {inputs.map((i) =>  
        <div className=" flex flex-col w-full">
          <label className="font-semibold leading-9 text-lg  text-[#002A78]">{i} </label>
          <input
          type="text"

            placeholder={i}
            className="border w-full border-[#002A7842] rounded-full shadow-md bg-white  p-2"
          />
        </div>)
        }

{/* 
        <div className="flex flex-col w-full">
          <label className="font-semibold  text-[#002A78]">מספר עובד</label>
          <input
            type="tel"
            dir="rtl"
            placeholder="מספר עובד"
            className="border border-[#002A7842] rounded-full shadow-md bg-white  px-3"
          />
        </div>
        <div className="flex flex-col">
          <label className="font-semibold  text-[#002A78]">שם מלא </label>
          <input
            placeholder="שם מלא"
            type="text"
            className="border border-[#002A7842] rounded-full shadow-md  bg-white w-80 px-3"
          />
        </div>
        <div className="flex flex-col">
          <label className="font-semibold  text-[#002A78]">הרשאות</label>
          <select className="border border-[#002A7842] rounded-full text-[#002A7887] shadow-md bg-white w-80 px-3">
            <option value="" disabled selected>
              בחר הרשאות
            </option>

            <option value="d">d</option>
            <option value="c">c</option>
            <option value="b">b</option>
            <option value="a">a</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label className="font-semibold  text-[#002A78]">מחלקות</label>
          <select className="border border-[#002A7842] rounded-full text-[#002A7887] shadow-md bg-white w-80 px-3">
            <option value="" disabled selected>
              מחלקות
            </option>

            <option value="d">d</option>
            <option value="c">c</option>
            <option value="b">b</option>
            <option value="a">a</option>
          </select>
        </div> */}
        <But text={"שמור"}/>

        
      </div>
    </div>
  );
}

