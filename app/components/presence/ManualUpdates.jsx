import axios from "@/app/lib/axios";
import React, { useEffect, useState } from "react";

export default function ManualUpdates({ attendance_id }) {
  const [updates, setUpdates] = useState([]);

  const fetchChanges = async () => {
    try {
      const response = await axios.get(`/updates/${attendance_id}`);
      const data = response.data;
      setUpdates(data);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchChanges();
  }, []);

  const englishToHebrew = [{}, {}, {}, {}, {}, {}];
  const hebrew = (word) => {
    switch (word) {
      case "entrance1":
        return "כניסה 1";
      case "entrance2":
        return "כניסה 2";
      case "entrance3":
        return "כניסה 3";
      case "exit1":
        return "יציאה 1";
      case "exit2":
        return "יציאה 2";
      case "exit3":
        return "יציאה 3";
      case "activity_code1":
        return "קוד פעילות 1";
      case "activity_code2":
        return "קוד פעילות 2";
      case "activity_code3":
        return "קוד פעילות 3";
      case "waiting_time":
        return "שעות המתנה";
      default:
        break;
    }
  };
  return (
    <div className="overflow-auto dirLtr">
      {updates.map((item, index) => (
        <div key={index} className="dirRtl px-2 ">
          <div className="py-1">
            <div className="bg-blue_color text-white py-2  rounded-lg grid grid-cols-3 text-center items-center justify-around">
              <div className="flex flex-col items-center justify-center leading-4">
                <div className="truncate">נתון מקור</div>
                <div className="truncate">שעבר שינוי</div>
              </div>
              <div className="font-semibold">{hebrew(item.field_name)}</div>
              <div>{item.original_value.slice(0, 5)}</div>
            </div>
          </div>

          <div className="pt-0.5">
            <div className="bg-[#E4EBF8] font-semibold text-center py-1 grid grid-cols-3 rounded-full  items-center justify-around">
              <div className="">עודכן ב</div>
              <div className="">עודכן ע"י</div>
              <div>החתמות</div>
            </div>
          </div>

          {/* Updates container */}
          {item.changes.map((change, idx) => (
            <div key={idx} className="w-full">
              <div className="font-normal py-2  grid grid-cols-3  items-center justify-center">
                <div className="flex-col text-center items-center justify-center leading-4">
                  <div className="text-center font-semibold">
                    {new Date(change.updated_at).toLocaleString("he-IL", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </div>
                  <div className="text-gray-400 truncate">
                    {new Date(change.updated_at)
                      .toLocaleString("he-IL", {
                        day: "2-digit",
                        month: "2-digit",
                        year: "numeric",
                      })
                      .replace(/\./g, "/")}
                  </div>
                </div>
                <div className="font-medium text-center">
                  {change.updated_by}
                </div>
                <div className="text-center font-medium">
                  {change.value.slice(0, 5)}
                </div>
              </div>
              <div className="w-full flex items-center justify-center">
                <div className="bg-gray-300 py-[0.1px] w-[95%]  "></div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
