"use client";
import React, { useState } from "react";
import Month from "../components/Month";
import PopupDay from "../components/PopupDay";
import Exclusions from "../components/Exclusions";

export default function Calendar() {
  const [messinDay2, setMessinDay2] = useState(false);
  const [messinDay, setMessinDay] = useState({});
  const [chck, setChck] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [exclusions, setExclusions] = useState(false);

  console.log(`עכשיו=${chck}`);

  return (
    <div className="flex ">
      <div className={`${messinDay2 ? "w-4/5" : "w-full"} `}>
        <Month
          setMessinDay2={setMessinDay2}
          messinDay2={messinDay2}
          messinDay={messinDay}
          setMessinDay={setMessinDay}
          chck={chck}
          setChck={setChck}
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
          chck={chck}
          setChck={setChck}
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
