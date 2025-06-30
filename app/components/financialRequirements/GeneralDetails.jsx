import React from "react";
import { Controller } from "react-hook-form";
import Select from "react-select";
import RequiermentSelect from "./RequiermentSelect";

export default function GeneralDetails({ register, control, errors }) {
  const inputs = [
    { key: "expirimentNane", label: "שם ניסוי" },
    { key: "subjectOfficer ", label: "קצין נושא" },
    { key: "leadingSection", label: "מדור מוביל" },
    { key: "expirimentEssence", label: "מהות הניסוי" },
    { key: "client", label: "לקוח" },
    { key: "gmash", label: 'ג"מש' },
    { key: "interest_level_id", label: "רמת ענין" },
    { key: "securityClassification", label: "סיווג בטחוני" },
  ];

  const selectInput = ["מדור מוביל", "רמת ענין", 'ג"מש', "סיווג בטחוני"];

  return (
    <div className=" flex w-full ">
      <div className="w-4/5   grid grid-cols-3     ">
        {inputs.map((item, index) => (
          <div
            key={index}
            className={`  justify-between flex flex-col p-4 gap-2 
       
            `}
          >
            <label className=" text-right font-bold text-[#002A78]">
              {item.label}
            </label>
            {selectInput.includes(item.label) ? (
              <RequiermentSelect
                name={`${"generalDetails"}.${item.key}`}
                itemKey={item.key}
                label={item.label}
                control={control}
              />
            ) : (
              <div className="w-full ">
                <input
                  {...register(`${"generalDetails"}.${item.key}`, {
                    required: `${item.label} נדרש`,
                  })}
                  type="text"
                  placeholder={item.label}
                  className={`${
                    item.label === "קצין נושא" && "bg-[#EBEEF5]"
                  } h-9  w-full px-4 border border-[#002A78]/10  outline-none  text-[#002A78] rounded-xl `}
                />
                {errors?.["generalDetails"]?.[item.key] && (
                  <p className="text-red-500 text-sm ">
                    {errors["generalDetails"][item.key].message}
                  </p>
                )}
              </div>
            )}
          </div>
          // <Input
          //   key={index}
          //   title={"generalDetails"}
          //   label={item.label}
          //   header={item.key}
          //   register={register}
          //   // item={item.label}
          //   // onBlur={handleBlur}
          // />
        ))}
      </div>

      <div className="w-1/5 flex items-start  justify-center">
        <TaskOpenerDetails />
      </div>
    </div>
  );
}

const TaskOpenerDetails = () => {
  const openerDetails = {
    taskName: "רנג ישראל ישראלי",
    taskNumber: "12345678910 ",
    updateNumber: "000",
  };
  return (
    <>
      <div className="flex flex-col gap-2 bg-[#E4E8F3] p-4 rounded-xl font-normal text-center ">
        <div className=" flex flex-col  bg-white px-5 py-2  rounded-xl gap-y-1">
          <div className="font-semibold ">{"שם פותח המשימה"}</div>

          <div>{openerDetails.taskName}</div>
        </div>

        <div className=" flex flex-col  bg-white px-4 py-2  rounded-xl gap-y-1">
          <div className="font-semibold">{"מספר משימה"}</div>
          <hr></hr>
          <div>{openerDetails.taskNumber}</div>
        </div>

        <div className=" flex flex-col  bg-white px-4 py-2  rounded-xl gap-y-1">
          <div className="font-semibold">{"מספר עידכון"}</div>
          <hr></hr>
          <div>{openerDetails.updateNumber}</div>
        </div>
      </div>
    </>
  );
};
