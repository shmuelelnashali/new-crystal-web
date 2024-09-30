import React from "react";
import Image from "next/image";
import axios from "axios";

export default function PopupDelete({
  objectToDelete,
  setShowPopUpDelete,
  messageText,
  btnText,
  urlPage,
}) {
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
      <div className="bg-white py-2 px-2 w-[844px] h-[307px] rounded-xl text-right pr-7 pl-3">
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
          <select className="w-[579px] h-[41px] rounded-[41px] border-[0.84px] shadow-[0_2.4px_6px_-5.68px] mb-2 appearance-none">
            <option disabled selected hidden value="no">
              בחר מדור
            </option>
            {obj.map((mador) => (
              <option className="w-[534px] h-[48px]" value={mador}>{mador}</option>
            ))}
          </select>
          <h3 className="text-lg font-semibold text-blue_color mb-[2px]">
            מאיזה תאריך העובדים יעברו למדור החדש?
          </h3>
          <input
            type="date"
            className="w-[579px] h-[41px] rounded-[41px] border-[0.84px] shadow-[0_2.4px_6px_-5.68px]"
          />
        </div>
        <div className="flex w-full  justify-end mt-4">
          <button
            onClick={() => setShowPopUpDelete(false)}
            className="bg-white text-blue_color px-4  rounded-full border border-blue_color"
          >
            ביטול
          </button>
          <button
            onClick={"axiosDelete"}
            className="bg-blue_color text-white rounded-full px-4  mr-1 "
          >
            {"btnText" ?? "נתק"}
          </button>
        </div>
      </div>
    </div>
  );
}
