"use client";
import React, { useState } from "react";

import { FaShekelSign } from "react-icons/fa";
import Image from "next/image";
import GeneralDetails from "./GeneralDetails";
import PositionDays from "./PositionDays";
import WorkingHours from "./WorkingHours";
import OvertimeAndWaiting from "./OvertimeAndWaiting";
import OtherExpenses from "./OtherExpenses";
import Files from "./Files";
import Comments from "./Comments";

export default function NewRequirement() {
  const newRequirementObj = {
    generalDetails: {
      name: "פרטים כלליים",
      image: "requirementIcons/generalDetails.svg",
      component: GeneralDetails,
    },
    positionDays: {
      name: "ימי עמדה",
      image: "requirementIcons/positionDays.svg",
      component: PositionDays,
    },
    workingHours: {
      name: "שעות עבודה",
      image: "requirementIcons/workingHours.svg",
      component: WorkingHours,
    },
    overtimeAndWaiting: {
      name: "שעות נוספות והמתנה",
      image: "requirementIcons/overtimeAndWaiting.svg",
      component: OvertimeAndWaiting,
    },
    otherExpenses: {
      name: "הוצאות אחרות",
      image: "requirementIcons/otherExpenses.svg",
      component: OtherExpenses,
    },
    files: {
      name: "קבצים",
      image: "requirementIcons/files.svg",
      component: Files,
    },
    comments: {
      name: "הערות",
      image: "requirementIcons/comments.svg",
      component: Comments,
    },
  };

  const [formData, setFormData] = useState({
    otherExpenses: {},
    workingHours: {},
    overtimeAndWaiting: {},
    positionDays: {},
  });
  const [expandedItem, setExpandedItem] = useState([]);
  const [totalCost, setTotalCost] = useState(0.00);

  const handleInputChange = (section, updatedData) => {
    {
      console.log(section);
    }

    setFormData((prevState) => ({
      ...prevState,
      [section]: updatedData,
    }));
  };

  // const open = (key) => {
  //   const newExpandedItem = [expandedItem];
  //   console.log(newExpandedItem);

  //   if (newExpandedItem.includes(key)) {
  //     const index = expandedItem.indexOf(key);
  //     newExpandedItem.splice(index, 1);
  //   } else {
  //     newExpandedItem.push(key);
  //     console.log(newExpandedItem);
  //   }

  //   setExpandedItem(newExpandedItem);
  // };
  return (
    <div className="dirRtl h-full flex flex-col justify-between">
      <div
        className="text-end font-bold ml-4 cursor-pointer"
        onClick={() => setExpandedItem(expandedItem === true ? null : true)}
      >
        {expandedItem === true ? "סגור הכל" : " פתח הכל"}
      </div>

      {Object.entries(newRequirementObj).map(([key, item]) => {
        const ComponentToRender = item.component;
        return (
          <div key={key} className=" p-2  ">
            <div className="p-6 items-center rounded-2xl bg-light_blue hover:cursor-pointer ">
              <div
                className="font-bold flex text-xl gap-4 "
                onClick={() =>
                  setExpandedItem(expandedItem === key ? null : key)
                }
              >
                <Image
                  src={item.image}
                  width={28}
                  height={28}
                  alt={item.name}
                />
                {item.name}
              </div>

              {expandedItem === key && (
                <ComponentToRender
                  formData={formData[key]}
                  setFormData={(updatedData) =>
                    handleInputChange(key, updatedData)
                  }
                />
              )}
              {expandedItem === true && <ComponentToRender />}
            </div>
          </div>
        );
      })}

      <div className="object-bottom p-2 ">
        <div className="text-center font-bold text-3xl">
          <span className="ml-10">עלות כוללת</span>
          <span>
            {totalCost}&nbsp;
            <FaShekelSign size={20} className="inline-block  " />
          </span>
        </div>
        <div className="flex justify-between pt-4">
          <button className="  text-white bg-blue_color rounded-full p-2">
            העברה לאישור רמ"ד
          </button>
          <button className=" font-  border border-blue_color rounded-3xl p-2">
            שמירה
          </button>
        </div>
      </div>
    </div>
  );
}
