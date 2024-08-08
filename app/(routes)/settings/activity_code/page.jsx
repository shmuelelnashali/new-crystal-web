import Image from "next/image";
import React from "react";

export default function activity() {
  const heders = [
    "קוד פעילות",
    "שם קוד פעילות",
    "תאריך התחלה",
    "תאריך סיום",
    "קוד לביא",
  ];

  console.log(heders);
  const activity_code = [
    {
      activity_type: "axcvג",
      code_namber: 1,
      type: "חג",
      namber: 1,
      activity: "חג",
    },
    {
      code_namber: 2,
      activity_type: "חג",
    },
    {
      code_namber: 1,
      activity_type: "חג",
    },
    {
      code_namber: 1,
      activity_type: "חג",
    },
    {
      code_namber: 1,
      activity_type: "חג",
    },
    {
      code_namber: 1,
      activity_type: "חג",
    },
    {
      code_namber: 1,
      activity_type: "חג",
    },
    {
      code_namber: 1,
      activity_type: "חג",
    },
    {
      code_namber: 1,
      activity_type: "חג",
    },
    {
      code_namber: 1,
      activity_type: "חג",
    },
    {
      code_namber: 1,
      activity_type: "חג",
    },
    {
      code_namber: 1,
      activity_type: "חג",
    },
    {
      code_namber: 1,
      activity_type: "חג",
    },
    {
      code_namber: 1,
      activity_type: "חג",
    },
    {
      code_namber: 1,
      activity_type: "חג",
    },
    {
      code_namber: 1,
      activity_type: "חג",
    },
    {
      code_namber: 1,
      activity_type: "חג",
    },
    {
      code_namber: 1,
      activity_type: "חג",
    },
    {
      code_namber: 1,
      activity_type: "חג",
    },
    {
      code_namber: 1,
      activity_type: "חג",
    },
    {
      code_namber: 1,
      activity_type: "חג",
    },
    {
      code_namber: 1,
      activity_type: "חג",
    },
    {
      code_namber: 1,
      activity_type: "חג",
    },
  ];
  return (
    <div className="w-full h-full  gap-6 flex ">
      <div className=" bg-[#EFF3FB] w-[15%] rounded-2xl "></div>

      <div className="h-full w-full flex flex-col ">
        <div className="flex justify-between items-center w-full pb-2">
          <div className="w-full font-bold text-4xl">ניהול קודי פעילות</div>
          <div className=" w-full px-3">
            <div className=" w-full gap-3 whitespace-nowrap flex">
              <div className="relative flex w-full  ">
                <input
                  className="pr-2  w-full outline-none border-[1.5px] border-blue_color rounded-2xl"
                  type="text"
                />
                <Image
                  className="absolute transform -translate-y-1/2 left-3 top-1/2"
                  src="/MagnifyingGlass.svg"
                  width={20}
                  height={20}
                  alt="search"
                />
              </div>
              <button className="w-2/6 flex justify-center gap-1.5 items-center text-white py-1 bg-blue_color rounded-2xl">
                <Image
                  src={"/addEmployee.svg"}
                  width={20}
                  height={20}
                  alt="plus"
                />
                הוסף שורה חדשה
              </button>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col overflow-hidden  rounded-lg">
          <div className=" px-2  dirLtr h-full rounded-2xl overflow-auto">
            <div className=" dirRtl bg-[#EFF3FB] rounded-lg ">
              <div className="p-2 pb-0 text-white rounded-lg sticky top-0 bg-[#EFF3FB] w-full">
                <div className="grid grid-cols-9  sticky top-0 rounded-lg p-2 bg-blue_color justify-center ">
                  {heders.map((header, index) => (
                    <div
                      key={header}
                      className=" text-center font-semibold text-xl"
                    >
                      {header}
                    </div>
                  ))}
                  <div
                    className="text-center  col-end-10
                   "
                  >
                    פעולות
                  </div>
                </div>
              </div>
              <div className="flex flex-col px-2   ">
                {activity_code.map((code, rowIndex) => (
                  <div
                    key={code}
                    className="grid grid-cols-9 justify-center border-b-[2px] py-2.5"
                  >
                    {Object.entries(code).map(
                      ([code_key, code_value], index) => (
                        <div key={code_key} className="text-center">
                          {code_value}
                        </div>
                      )
                    )}
                    <div className="flex justify-around col-end-10 ">
                      <div className="gap-1 flex px-3 w-fit text-white rounded-full bg-blue_color">
                        <Image
                          src={"/editing.svg"}
                          width={15}
                          height={16}
                          alt={"uu"}
                        />

                        <p>עריכת שורה</p>
                      </div>
                      <Image
                        src={"/bit.svg"}
                        width={15}
                        height={16}
                        alt={"uu"}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
