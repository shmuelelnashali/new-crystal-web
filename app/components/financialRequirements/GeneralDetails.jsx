import React from "react";

export default function GeneralDetails() {
  const inputs = {
    expirimentNane: { label: "שם ניסוי" },
    subjectOfficer: { label: "קצין נושא" },
    levelOfIntrest: { label: "רמת ענין" },
    expirimentEssence: { label: "מהות הניסוי" },
    client: { label: "לקוח" },
    gmash: { label: 'ג"מש' },
    securityClassification: { label: "סיווג בטחוני" },
    leadingSection: { label: "מדור מוביל" },
  };

  const handleBlur = (key) => (event) => {
    const newValue = event.target.value;
    setFormValues((prevValues) => ({
      ...prevValues,
      [key]: newValue,
    }));
  };

  return (
    <div className="flex w-full   ">
      <div className="w-4/5   grid grid-cols-3     ">
        {Object.entries(inputs).map(([key, item]) => (
          <Input key={key} item={item.label} onBlur={handleBlur} />
        ))}
      </div>

      <div className="w-1/5 flex items-start  justify-center">
        <TaskOpenerDetails />
      </div>
    </div>
  );
}

const Input = ({ item }) => {
  return (
    <>
      <div
        className={` justify-between flex flex-col p-4 gap-2 ${
          item === "מדור מוביל" && "  col-span-2 "
        } `}
      >
        <label className=" text-right font-bold text-[#002A78]">{item}</label>
        <input
          type="text"
          // value={experimentName}
          placeholder={item}
          className="  h-9   px-4 bg-[#EBEEF5] border border-[#002A78]/10  outline-none  text-[#002A78] rounded-xl"

          // onChange={handleInputChange}
          // onBlur={handleBlur}
        />
      </div>
    </>
  );
};

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
          <div className="font-semibold">{"שם פותח המשימה"}</div>

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
