import { Pencil } from "lucide-react";
import React from "react";

export default function Section({ madors }) {
  return (
    <div className="bg-[#002A78]/25 ">
      {madors?.map((mador, madorIndex) => (
        <div
          key={madorIndex}
          className="grid grid-cols-9 whitespace-nowrap justify-center   border-b-[1px] py-2.5"
        >
          {Object.entries(mador).map(([key, value]) => (
            <div key={key} className="col-span-1 text-center pr-40">
              {value}
            </div>
          ))}

          <div className="flex justify-around col-end-10">
            <div className="bg-blue_color border items-center border-blue_color gap-1 flex px-3 w-fit text-white rounded-full cursor-pointer">
              <Pencil strokeWidth={1.5} size={15} />
              <p>עריכת שורה</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
