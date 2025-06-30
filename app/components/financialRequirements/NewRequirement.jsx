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
import { useForm } from "react-hook-form";

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

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  const [expandedItem, setExpandedItem] = useState([]);
  const [totalCost, setTotalCost] = useState(0.0);
  const toggleInArray = (value) => {
    setExpandedItem((prev) => {
      if (prev.includes(value)) {
        return prev.filter((item) => item !== value);
      } else {
        return [...prev, value];
      }
    });
  };
  const toggleAll = () => {
    if (expandedItem.length === Object.keys(newRequirementObj).length) {
      setExpandedItem([]);
    } else {
      setExpandedItem(Object.keys(newRequirementObj));
    }
  };

  return (
    <div className=" h-full flex flex-col justify-between overflow-y-auto">
      <div className="dirRtl ">
        <div className="flex justify-between text-end font-bold ml-4 cursor-pointer">
          <div className="pr-3 ">מסך ראשי</div>
          <div
            className="text-end font-bold ml-4 cursor-pointer"
            onClick={toggleAll}
          >
            {expandedItem.length === Object.keys(newRequirementObj).length
              ? "סגור הכל"
              : " פתח הכל"}
          </div>
        </div>
        <form  className="dirRtl " onSubmit={handleSubmit(onSubmit)}>
          {Object.entries(newRequirementObj).map(([key, item]) => {
            const ComponentToRender = item.component;
            return (
              <div key={key} className=" p-2  " onClick={() => toggleInArray(key)}>
                <div className="p-6 items-center rounded-2xl bg-light_blue hover:cursor-pointer ">
                  <div
                    className="font-bold flex text-xl gap-4 "
                    
                  >
                    <Image
                      src={item.image}
                      width={28}
                      height={28}
                      alt={item.name}
                    />
                    {item.name}
                  </div>
<div onClick={(e) => e.stopPropagation()} className="mt-2">
                  {expandedItem.includes(key) && (
                    <ComponentToRender
                      register={register}
                      handleSubmit={handleSubmit}
                      errors={errors}
                      control={control}
                    />
                  )}</div>
                </div>
              </div>
            );
          })}
          <input type="submit" value={"שלח"}></input>
        </form>
      </div>
      <div className="object-bottom p-2 ">
        <div className="text-center font-bold text-3xl">
          <span className="ml-10">עלות כוללת</span>
          <span>
            {totalCost}&nbsp;
            <FaShekelSign size={20} className="inline-block  " />
          </span>
        </div>
        <div className="flex justify-between pt-4">
          <button className="text-white bg-blue_color rounded-full p-2">
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
