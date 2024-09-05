import React from "react";
import Image from "next/image";

export default function PopupToEditMission({
  showPopup,
  value,
  setShowPopup,
  handleSubmit,
}) {
    console.log(value,"va");
    
  return (
    <div
      className={
        "fixed inset-0 flex justify-center items-center bg-[#000000]/20 bg-opacity-30 backdrop-blur-sm z-50"
       
      }
    >
      <div className="bg-white rounded-lg p-5 w-3/4 ">
        <div className=" p-4 relative flex items-center justify-center">
          <div
            className="absolute top-0 left-0 hover:cursor-pointer"
            onClick={(e) => {e.stopPropagation(), setShowPopup()}}
          >
            <Image src={"/x.svg"} width={15} height={15} alt="x" />
          </div>

          <div className="text-xl w-1/2 mb-4 flex justify-center items-center text-white bg-blue_color text-center rounded-full">
            שם משימה חדשה
          </div>
        </div>

        <div className=" grid grid-cols-3 gap-5" >
          <div>
            <div className="mb-4">
              <div className="block text-blue_color font-bold">מספר משימה</div>
              <input
                type="text"
                name="taskNumber"
                className="w-full border rounded-lg px-2 py-1"
                required
                placeholder="מספר משימה"
              />
            </div>
            <div className="mb-4">
              <div className="block text-blue_color font-bold">שנה</div>
              <div className="relative w-full">
                <input
                  type="text"
                  name="taskName"
                  className="w-full border rounded-lg px-2 py-1 pl-10"
                  required
                  placeholder="בחר שנה"
                />
                <div className="absolute inset-y-0 left-3 flex items-center pl-2">
                  <Image
                    src={"/downArrow.svg"}
                    width={10}
                    height={10}
                    alt="arrow"
                  />
                </div>
              </div>
            </div>
            <div className="mb-4">
              <div className="block text-blue_color font-bold">
                שם קצין נושא
              </div>
              <input
                type="text"
                name="taskName"
                className="w-full border rounded-lg px-2 py-1"
                required
                placeholder="שם קצין נושא"
              />
            </div>
            <div className="mb-4">
              <div className="block text-blue_color font-bold">מדור מוביל</div>
              <div className="relative w-full">
                <input
                  type="text"
                  name="taskName"
                  className="w-full border rounded-lg px-2 py-1 pl-10"
                  required
                  placeholder="בחר מדור"
                />
                <div className="absolute inset-y-0 left-3 flex items-center pl-2">
                  <Image
                    src={"/downArrow.svg"}
                    width={10}
                    height={10}
                    alt="arrow"
                  />
                </div>
              </div>
            </div>
            <div className="mb-4">
              <div className="block text-blue_color font-bold">
                ימי מסלול מאושרים
              </div>
              <input
                type="text"
                name="taskName"
                className="w-full border rounded-lg px-2 py-1"
                required
              />
            </div>
          </div>
          <div>
            <div className="mb-4">
              <div className="block text-blue_color font-bold">שם משימה</div>
              <input
                type="text"
                name="taskNumber"
                className="w-full border rounded-lg px-2 py-1"
                required
                placeholder="שם משימה"
              />
            </div>
            <div className="mb-4">
              <div className="block text-blue_color font-bold">תאריך פתיחה</div>
              <input
                type="text"
                name="taskName"
                className="w-full border rounded-lg px-2 py-1"
                required
                placeholder="DD/MM/YYY"
              />
            </div>
            <div className="mb-4">
              <div className="block text-blue_color font-bold">רמת עניין</div>
              <div className="relative w-full">
                <input
                  type="text"
                  name="taskName"
                  className="w-full border rounded-lg px-2 py-1 pl-10"
                  required
                  placeholder="בחר רמת עניין"
                />
                <div className="absolute inset-y-0 left-3 flex items-center pl-2">
                  <Image
                    src={"/downArrow.svg"}
                    width={10}
                    height={10}
                    alt="arrow"
                  />
                </div>
              </div>
            </div>
            <div className="mb-4">
              <div className="block text-blue_color font-bold">תקציב מאושר</div>
              <input
                type="text"
                name="taskName"
                className="w-full border rounded-lg px-2 py-1"
                required
              />
            </div>
            <div className="mb-4">
              <div className="block text-blue_color font-bold">מדורים</div>
              <div className="relative w-full">
                <input
                  type="text"
                  name="taskName"
                  className="w-full border rounded-lg px-2 py-1 pl-10"
                  required
                  placeholder="בחר מדורים"
                />
                <div className="absolute inset-y-0 left-3 flex items-center pl-2">
                  <Image
                    src={"/downArrow.svg"}
                    width={10}
                    height={10}
                    alt="arrow"
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="mb-4">
              <div className="block text-blue_color font-bold">סוג משימה</div>
              <div className="relative w-full">
                <input
                  type="text"
                  name="taskName"
                  className="w-full border rounded-lg px-2 py-1 pl-10"
                  required
                  placeholder="בחר סוג משימה"
                />
                <div className="absolute inset-y-0 left-3 flex items-center pl-2">
                  <Image
                    src={"/downArrow.svg"}
                    width={10}
                    height={10}
                    alt="arrow"
                  />
                </div>
              </div>
            </div>
            <div className="mb-4">
              <div className="block text-blue_color font-bold">תאריך סגירה</div>
              <input
                type="text"
                name="taskName"
                className="w-full border rounded-lg px-2 py-1"
                required
                placeholder="DD/MM/YYYY"
              />
            </div>
            <div className="mb-4">
              <div className="block text-blue_color font-bold">גמ"ש</div>
              <div className="relative w-full">
                <input
                  type="text"
                  name="taskName"
                  className="w-full border rounded-lg px-2 py-1 pl-10"
                  required
                  placeholder='בחר גמ"ש'
                />
                <div className="absolute inset-y-0 left-3 flex items-center pl-2">
                  <Image
                    src={"/downArrow.svg"}
                    width={10}
                    height={10}
                    alt="arrow"
                  />
                </div>
              </div>
            </div>
            <div className="mb-4">
              <div className="block text-blue_color font-bold">
                שעות מאושרות
              </div>
              <input
                type="text"
                name="taskName"
                className="w-full border rounded-lg px-2 py-1"
                required
              />
            </div>
            <div className="mb-4">
              <div className="block text-blue_color font-bold">נוצר ע"י</div>
              <input
                type="text"
                name="taskName"
                className="w-full bg-[#EBEEF5] border rounded-lg px-2 py-1"
                required
                placeholder="מה לשים פה"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-3">
          <div
            onClick={(e) => {e.stopPropagation(), setShowPopup()}}
            className="px-4 py-2 border border-blue_color rounded-full text-blue_color font-semibold text-xl hover:cursor-pointer"
          >
            ביטול
          </div>
          <div
            type="submit"
            className="px-4 py-2  text-xl bg-blue_color text-white rounded-full hover:cursor-pointer flex justify-center items-center"
          >
            <div className="ml-2">
              <Image
                src={"/addEmployee.svg"}
                width={20}
                height={20}
                alt="plus"
              />
            </div>
            צור משימה
          </div>
        </div>
      </div>
    </div>
  );
}
