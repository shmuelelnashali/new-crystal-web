"use client";
import { useState } from "react";
import Month from "../components/Month";
import PopupDay from "../components/PopupDay";
import Exclusions from "../components/Exclusions";

export default function Calendar() {
  const [messinDay2, setMessinDay2] = useState(false); //TO OPEN POPUP
  const [messinDay, setMessinDay] = useState({}); //selected day
  const [selectedOption, setSelectedOption] = useState("");
  const [exclusions, setExclusions] = useState(true);//open popup החרגות 
  
const monthsInHebrew = [
  "ינואר",
  "פברואר",
  "מרץ",
  "אפריל",
  "מאי",
  "יוני",
  "יולי",
  "אוגוסט",
  "ספטמבר",
  "אוקטובר",
  "נובמבר",
  "דצמבר",
];

const daysInHebrew = [
  "ראשון",
 "שני", 
 "שלישי", 
 "רביעי", 
 "חמישי", 
 "שישי", 
 "שבת"
];
  // const [chck, setChck] = useState(false); 
  // console.log(`עכשיו=${chck}`);

  return (
    <div className="flex ">
      <div className={` ${messinDay2 ? "w-4/5" : "w-full px-[5%]"} `}>
        <Month
          setMessinDay2={setMessinDay2}
          messinDay2={messinDay2}
          messinDay={messinDay}
          setMessinDay={setMessinDay}
          monthsInHebrew={monthsInHebrew}
          daysInHebrew ={daysInHebrew }
          // chck={chck}
          // setChck={setChck}
        />
      </div>
      {messinDay2 && (
        <PopupDay
          exclusions={exclusions}
          setExclusions={setExclusions}
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
          setMessinDay2={setMessinDay2}
          messinDay2={messinDay2}
          messinDay={messinDay}
          setMessinDay={setMessinDay}
          // chck={chck}
          // setChck={setChck}
        />
      )}
      {exclusions && (
        <Exclusions
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
          exclusions={exclusions}
          setExclusions={setExclusions}
        />
      )}
    </div>
  );
}
