import React from "react";
import Image from "next/image";
import axios from "axios";

export default function PopupDelete({
  objectToDelete,
  showPopup,
  headerText,
  messageText,
  btnText,
  urlPage,
}) {
  const axiosDelete = async () => {
    try {
      await axios
        .put(`api/${urlPage}/${objectToDelete.id}`)
        .then((res) => res.status);
    } catch (error) {
      console.error("error with delete", error);
    }
  };

  return (
    <div className="fixed inset-0 flex  items-center justify-center bg-[#000000] bg-opacity-30 backdrop-blur-sm z-50">
      <div className="bg-white py-2 px-2 w-[50%] rounded-xl text-right">
        <div
          onClick={() => showPopup(false)}
          className=" w-full flex justify-end mt-0 hover:cursor-pointer"
        >
          <Image src={"/x.svg"} width={15} height={15} alt="x" />
        </div>
        <h1 className="font-bold leading-6	"> {headerText} </h1>
        <p>
          {messageText} "{objectToDelete.firstName} {objectToDelete.lastName}{objectToDelete.agreementName}"?
          
        </p>
        <div className="flex w-full  justify-end mt-4">
          <button
            onClick={() => showPopup(false)}
            className="bg-white text-[#002A78] px-4  rounded-full border border-[#002A78]"
          >
            ביטול
          </button>
          <button
            onClick={axiosDelete}
            className="bg-[#002A78] text-white rounded-full px-4  mr-1 "
          >
            {btnText ?? "מחק"}
          </button>
        </div>
      </div>
    </div>
  );
}
