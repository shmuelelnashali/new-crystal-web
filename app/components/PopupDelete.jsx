import React from "react";
import Image from "next/image";
import axios from "../lib/axios";
import { toast } from "react-hot-toast";

export default function PopupDelete({
  objectToDelete,
  showPopup,
  headerText,
  messageText,
  btnText,
  urlPage,
}) {
  console.log(objectToDelete,"id");
  
  const axiosDelete = async () => {
    console.log(objectToDelete,"obbbbb");
    
    try {
      const response =await axios.delete(`/employees/${objectToDelete.id}`,{is_active:0})
      const deleted = response.data.message
      toast.success(deleted)
      console.log(deleted,"dddddd");
      showPopup(false)
    } catch (error) {
      console.error("error with delete", error);
    }
  };

  const cancelDelete = ()=> toast('בחרת לא למחוק',
    {
      icon: '🙏',
      style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
      },
      duration: 1000,
    }
  );
  
  const stringForEmployee = objectToDelete
  ? `${objectToDelete.first_name || ""} ${objectToDelete.surname || ""}`.trim()
  : "";

  const stringForAgreement = objectToDelete
  ? `${objectToDelete.agreement || ""}`.trim()
  : "";
  const objectId = objectToDelete
  ? `${objectToDelete.id || ""}`.trim()
  : "";
  const objectMission = objectToDelete
  ? `${objectToDelete.taskName || ""}`.trim()
  : "";
  const stringForReportMeasure = objectToDelete
  ? `${objectToDelete.measure || ""}`.trim()
  :""
  return (
    <div className="fixed inset-0 flex  items-center justify-center bg-[#000000] bg-opacity-30 backdrop-blur-sm z-50">
      <div className="bg-white py-2 px-2 w-[50%] rounded-xl text-right">
        <div
          onClick={() => {showPopup(false), cancelDelete()}}
          className=" w-full flex justify-end mt-0 hover:cursor-pointer"
        >
          <Image src={"/x.svg"} width={15} height={15} alt="x" />
        </div>
        <h1 className="font-bold leading-6	"> {headerText} </h1>
        <p>
          {messageText} "{stringForEmployee||objectToDelete?.first_name}{objectToDelete?.lastName}{objectToDelete?.agreementName} 
          {/* {objectToDelete?.id} */}
          " ?
          
        </p>
        <div className="flex w-full  justify-end mt-4">
          <button
            onClick={() => {showPopup(false), cancelDelete()}}
            className="bg-white text-blue_color px-4  rounded-full border border-blue_color"
          >
            ביטול
          </button>
          <button
            onClick={axiosDelete}
            className="bg-blue_color text-white rounded-full px-4  mr-1 "
          >
            {btnText ?? "מחק"}
          </button>
        </div>
      </div>
    </div>
  );
}
