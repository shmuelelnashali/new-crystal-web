import React, { useState, useRef, forwardRef } from "react";
import Image from "next/image";
import vector90 from "@/public/vector90.svg";
import calendar from "@/public/calendar.svg";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

const CustomDatePicker = forwardRef((props, ref) => (
  <DatePicker {...props} ref={ref} />
));
CustomDatePicker.displayName = "CustomDatePicker";

export default function PopupDelete({
  objectToDelete,
  setShowPopUpDelete,
  messageText,
  btnText,
  urlPage,
}) {
  const [showOptions, setShowOptions] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  const dateInputRef = useRef(null);

  const handleIconClick = () => {
    setIsOpen(false);
    if (dateInputRef.current) {
      dateInputRef.current.setOpen(true);
    }
  };
  const handleCalendarClose = () => {
    setIsOpen(true);
  };

  // const axiosDelete = async () => {
  //   try {
  //     await axios
  //       .put(`api/${urlPage}/${objectToDelete.id}`)
  //       .then((res) => res.status);
  //   } catch (error) {
  //     console.error("error with delete", error);
  //   }
  // };

  const obj = [1, 2, 3, 4, 5, 6];

  return (
    <div
      dir="rtl"
      className="fixed inset-0 flex  items-center justify-center bg-[#000000] bg-opacity-30 backdrop-blur-sm z-50"
    >
      <div className="bg-white py-2 px-2 w-[844px] h-[307px] rounded-xl text-right pr-7 pl-4">
        <div className="mb-3">
          <div className="flex justify-between pt-2">
            <h1 className="font-bold text-2xl leading-6	text-blue_color mb-4 mt-2">
              האם אתה בטוח שאתה רוצה למחוק את
            </h1>

            <Image
              onClick={() => setShowPopUpDelete(false)}
              className="hover:cursor-pointer w-[15px] h-[15px]"
              src={"/x.svg"}
              width={15}
              height={15}
              alt="x"
            />
          </div>
          <p className="text-xl font-normal text-blue_color">
            במדור אאא ישנם 23 עובדים, עליך לשייך אותם למדור אחר על מנת למחוק
            מדור זה.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-blue_color mb-[2px]">
            לאיזה מדור תרצה לשייך את העובדים?
          </h3>
          <div className="h-[41px] mb-2 flex relative">
            <div
              onClick={() => setShowOptions(true)}
              className="w-[579px] h-[41px] bg-white px-6 rounded-[41px] border-[0.84px] border-[#002A7842] shadow-[0_2.4px_6px_-5.68px] text-[16.8px] font-light text-[#002A7887] flex items-center justify-between z-10"
            >
              <span>בחר מדור</span>
              <Image src={vector90} alt="vector90" width={9} height={5} />
            </div>
            {showOptions && (
              <div
                dir="ltr"
                className="w-[579px] max-h-[271px] bg-white absolute top-6 pr-[9px]"
                style={{ boxShadow: "0px 4px 4px 1px rgba(0, 0, 0, 0.25)" }}
              >
                <div className="max-h-[271px] bg-white py-4 pl-[80px] overflow-y-auto pr-4">
                  {obj.map((mador, index) => (
                    <div
                      key={index}
                      className="h-[48px] text-[18px] font-normal text-[#002A78] flex items-center justify-end pr-3 border-b-[2px] border-[#f0f1f0]"
                    >
                      {mador}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          <h3 className="text-lg font-semibold text-blue_color mb-[2px]">
            מאיזה תאריך העובדים יעברו למדור החדש?
          </h3>
          <div className="inline-flex relative ">
            <CustomDatePicker
              type="date"
              className="w-[579px] h-[41px] bg-white rounded-[41px] border-[0.84px] border-[#002A7842] shadow-[0_2.4px_6px_-5.68px] pr-6 pl-5 text-[#002A7887]"
              ref={dateInputRef}
              disabled={isOpen}
              onCalendarClose={handleCalendarClose}
            />
            <div onClick={handleIconClick} className="absolute left-5 top-3">
              <Image
                src={calendar}
                alt="calendar icon"
                width={16.5}
                height={16.5}
              />
            </div>
          </div>
        </div>
        <div className="flex w-full  justify-end pt-2">
          <button
            onClick={() => setShowPopUpDelete(false)}
            className="bg-white text-blue_color px-6 py-[2px] rounded-full border border-blue_color text-xl font-normal"
          >
            ביטול
          </button>
          <button
            onClick={"axiosDelete"}
            className="bg-blue_color text-white rounded-full px-6  mr-1 text-xl font-normal"
          >
            נתק
          </button>
        </div>
      </div>
    </div>
  );
}
