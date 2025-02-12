"use client";
import Image from "next/image";
import axios from "@/app/lib/axios";
import { useMessage } from "./GlobalState";

export default function PopUpDelete({
  unitToDeleteOrDisconnect,
  setPopUpDeleteEmptyUnit,
  fetchAlltheTree,
  setNodes,
}) {
  const { setMessage } = useMessage();

  const deleteUnitWithoutEmployess = async () => {
    const { dbId, url } = unitToDeleteOrDisconnect;

    try {
      const response = await axios.delete(`${url}/${dbId}`);
      setMessage({ status: "success", response: response.data.message });
      fetchAlltheTree();
      return response;
    } catch (error) {
      console.error(error);
      setMessage({ status: "error", response: error.message });
    }
  };
    
  const deleteNodeInClient = () => {
    try {
      setNodes((prevNodes) =>
        prevNodes.filter((node) => node.id !== unitToDeleteOrDisconnect.nodeId)
      );
      setMessage({
        status: "success",
        response: `${unitToDeleteOrDisconnect.level} נמחק בהצלחה`,
      });
    } catch (error) {
      console.error(error);
      setMessage({ status: "error", response: "מחיקה נכשלה" });
    }
  };

  const handleNodeDelete = () => {
    unitToDeleteOrDisconnect.dbId
      ? deleteUnitWithoutEmployess()
      : deleteNodeInClient();
  };

  return (
    <div
      dir="rtl"
      className="fixed inset-0 flex  items-center justify-center bg-[#000000] bg-opacity-30 backdrop-blur-sm z-50"
    >
      <div className="bg-white  w-2/5  rounded-xl text-right pr-7 p-4">
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold leading-6 text-[#002A78]  pt-1">
            מחיקה
          </h1>
          <Image
            onClick={() => setPopUpDeleteEmptyUnit(false)}
            className="hover:cursor-pointer pb-4"
            src={"/x.svg"}
            width={15}
            height={15}
            alt="x"
          />
        </div>

        <p className="text-[#002A78] text-xl font-normal pb-2">
          האם ברצונך למחוק את מחלקה "{unitToDeleteOrDisconnect.name}" ואת כל
          הענפים והמדורים שתחתיה?
        </p>
        <div className=" pl-1 w-full flex justify-end">
          <button
            onClick={() => setPopUpDeleteEmptyUnit(false)}
            className="bg-white text-blue_color px-6 py-[2px] rounded-full border border-blue_color text-xl font-normal"
          >
            ביטול
          </button>
          <button
            onClick={() => {
              handleNodeDelete(), setPopUpDeleteEmptyUnit(false);
            }}
            className="bg-blue_color text-white rounded-full px-6  mr-1 text-xl font-normal"
          >
            מחק
          </button>
        </div>
      </div>
    </div>
  );
}
