"use client";
import Search from "../../components/ui/Search";
import Image from "next/image";
import { useState } from "react";
import MissionTable from "@/app/components/MissionTable";
import PopupDelete from "@/app/components/PopupDelete";
import PopupMission from "@/app/components/PopupMission";

const data = [
  {
    taskNumber: "12345",
    taskName: "שם משימה שם משימה שם משימה",
    missionType: "סוג משימה משימהמשימהמשימה",
    year: "2024",
    gamash: "תחמושת",
    openDate: "01/01/2024",
    closeDate: "02/02/2024",
    officerName: 'רנ"ג ישראל ישראלי',
    status: "פעיל", 
    interestLevel: 'רמ"ד',
  },

  {
    taskNumber: "12345",
    taskName: "שם משימה שם משימה שם משימה",
    missionType: "סוג משימה",
    year: "2024",
    gamash: "תחמושת",
    start: "01/01/2024",
    closeDate: "02/02/2024",
    officerName: 'רנ"ג ישראל ישראלי',
    status: "פעיל",
    interestLevel: 'רמ"ד',
  },

  {
    taskNumber: "12345",
    taskName: "שם משימה שם משימה שם משימה",
    missionType: "סוג משימה",
    year: "2024",
    gamash: "תחמושת",
    openDate: "01/01/2024",
    closeDate: "02/02/2024",
    officerName: 'רנ"ג ישראל ישראלי',
    status: "פעיל",
    interestLevel: 'רמ"ד',
  },
  {
    taskNumber: "12345",
    taskName: "שם משימה שם משימה שם משימה",
    missionType: "סוג משימה",
    year: "2024",
    gamash: "תחמושת",
    openDate: "01/01/2024",
    closeDate: "02/02/2024",
    officerName: 'רנ"ג ישראל ישראלי',
    status: "פעיל",
    interestLevel: 'רמ"ד',
  },
  {
    taskNumber: "12345",
    taskName: "שם משימה שם משימה שם משימה",
    missionType: "סוג משימה",
    year: "2024",
    gamash: "תחמושת",
    openDate: "01/01/2024",
    closeDate: "02/02/2024",
    officerName: 'רנ"ג ישראל ישראלי',
    status: "פעיל",
    interestLevel: 'רמ"ד',
  },
  {
    taskNumber: "12345",
    taskName: "שם משימה שם משימה שם משימה",
    missionType: "סוג משימה",
    year: "2024",
    gamash: "תחמושת",
    openDate: "01/01/2024",
    closeDate: "02/02/2024",
    officerName: 'רנ"ג ישראל ישראלי',
    status: "פעיל",
    interestLevel: 'רמ"ד',
  },
  {
    taskNumber: "12345",
    taskName: "שם משימה שם משימה שם משימה",
    missionType: "סוג משימה",
    year: "2024",
    gamash: "תחמושת",
    openDate: "01/01/2024",
    closeDate: "02/02/2024",
    officerName: 'רנ"ג ישראל ישראלי',
    status: "פעיל",
    interestLevel: 'רמ"ד',
  },
  {
    taskNumber: "12345",
    taskName: "שם משימה שם משימה שם משימה",
    missionType: "סוג משימה",
    year: "2024",
    gamash: "תחמושת",
    openDate: "01/01/2024",
    closeDate: "02/02/2024",
    officerName: 'רנ"ג ישראל ישראלי',
    status: "פעיל",
    interestLevel: 'רמ"ד',
  },
  {
    taskNumber: "12345",
    taskName: "שם משימה שם משימה שם משימה",
    missionType: "סוג משימה",
    year: "2024",
    gamash: "תחמושת",
    openDate: "01/01/2024",
    closeDate: "02/02/2024",
    officerName: 'רנ"ג ישראל ישראלי',
    status: "פעיל",
    interestLevel: 'רמ"ד',
  },
  {
    taskNumber: "12345",
    taskName: "שם משימה שם משימה שם משימה",
    missionType: "סוג משימה",
    year: "2024",
    gamash: "תחמושת",
    openDate: "01/01/2024",
    closeDate: "02/02/2024",
    officerName: 'רנ"ג ישראל ישראלי',
    status: "פעיל",
    interestLevel: 'רמ"ד',
  },
  {
    taskNumber: "12345",
    taskName: "שם משימה שם משימה שם משימה",
    missionType: "סוג משימה",
    year: "2024",
    gamash: "תחמושת",
    openDate: "01/01/2024",
    closeDate: "02/02/2024",
    officerName: 'רנ"ג ישראל ישראלי',
    status: "פעיל",
    interestLevel: 'רמ"ד',
  },
  {
    taskNumber: "12345",
    taskName: "שם משימה שם משימה שם משימה",
    missionType: "סוג משימה",
    year: "2024",
    gamash: "תחמושת",
    openDate: "01/01/2024",
    closeDate: "02/02/2024",
    officerName: 'רנ"ג ישראל ישראלי',
    status: "פעיל",
    interestLevel: 'רמ"ד',
  },
  {
    taskNumber: "12345",
    taskName: "שם משימה שם משימה שם משימה",
    missionType: "סוג משימה",
    year: "2024",
    gamash: "תחמושת",
    openDate: "01/01/2024",
    closeDate: "02/02/2024",
    officerName: 'רנ"ג ישראל ישראלי',
    status: "פעיל",
    interestLevel: 'רמ"ד',
  },
  {
    taskNumber: "12345",
    taskName: "שם משימה שם משימה שם משימה",
    missionType: "סוג משימה",
    year: "2024",
    gamash: "תחמושת",
    openDate: "01/01/2024",
    closeDate: "02/02/2024",
    officerName: 'רנ"ג ישראל ישראלי',
    status: "פעיל",
    interestLevel: 'רמ"ד',
  },
  {
    taskNumber: "12345",
    taskName: "שם משימה שם משימה שם משימה",
    missionType: "סוג משימה",
    year: "2024",
    gamash: "תחמושת",
    openDate: "01/01/2024",
    closeDate: "02/02/2024",
    officerName: 'רנ"ג ישראל ישראלי',
    status: "פעיל",
    interestLevel: 'רמ"ד',
  },
  {
    taskNumber: "12345",
    taskName: "שם משימה שם משימה שם משימה",
    missionType: "סוג משימה",
    year: "2024",
    gamash: "תחמושת",
    openDate: "01/01/2024",
    closeDate: "02/02/2024",
    officerName: 'רנ"ג ישראל ישראלי',
    status: "פעיל",
    interestLevel: 'רמ"ד',
  },
  {
    taskNumber: "12345",
    taskName: "שם משימה שם משימה שם משימה",
    missionType: "סוג משימה",
    year: "2024",
    gamash: "תחמושת",
    openDate: "01/01/2024",
    closeDate: "02/02/2024",
    officerName: 'רנ"ג ישראל ישראלי',
    status: "פעיל",
    interestLevel: 'רמ"ד',
  },
  {
    taskNumber: "12345",
    taskName: "שם משימה שם משימה שם משימה",
    missionType: "סוג משימה",
    year: "2024",
    gamash: "תחמושת",
    openDate: "01/01/2024",
    closeDate: "02/02/2024",
    officerName: 'רנ"ג ישראל ישראלי',
    status: "פעיל",
    interestLevel: 'רמ"ד',
  },
  {
    taskNumber: "12345",
    taskName: "שם משימה שם משימה שם משימה",
    missionType: "סוג משימה",
    year: "2024",
    gamash: "תחמושת",
    openDate: "01/01/2024",
    closeDate: "02/02/2024",
    officerName: 'רנ"ג ישראל ישראלי',
    status: "פעיל",
    interestLevel: 'רמ"ד',
  },
  {
    taskNumber: "12345",
    taskName: "שם משימה שם משימה שם משימה",
    missionType: "סוג משימה",
    year: "2024",
    gamash: "תחמושת",
    openDate: "01/01/2024",
    closeDate: "02/02/2024",
    officerName: 'רנ"ג ישראל ישראלי',
    status: "פעיל",
    interestLevel: 'רמ"ד',
  },
  {
    taskNumber: "12345",
    taskName: "שם משימה שם משימה שם משימה",
    missionType: "סוג משימה",
    year: "2024",
    gamash: "תחמושת",
    openDate: "01/01/2024",
    closeDate: "02/02/2024",
    officerName: 'רנ"ג ישראל ישראלי',
    status: "פעיל",
    interestLevel: 'רמ"ד',
  },
  {
    taskNumber: "12345",
    taskName: "שם משימה שם משימה שם משימה",
    missionType: "סוג משימה",
    year: "2024",
    gamash: "תחמושת",
    openDate: "01/01/2024",
    closeDate: "02/02/2024",
    officerName: 'רנ"ג ישראל ישראלי',
    status: "פעיל",
    interestLevel: 'רמ"ד',
  },
  {
    taskNumber: "12345",
    taskName: "שם משימה שם משימה שם משימה",
    missionType: "סוג משימה",
    year: "2024",
    gamash: "תחמושת",
    openDate: "01/01/2024",
    closeDate: "02/02/2024",
    officerName: 'רנ"ג ישראל ישראלי',
    status: "פעיל",
    interestLevel: 'רמ"ד',
  },
  {
    taskNumber: "12345",
    taskName: "שם משימה שם משימה שם משימה",
    missionType: "סוג משימה",
    year: "2024",
    gamash: "תחמושת",
    openDate: "01/01/2024",
    closeDate: "02/02/2024",
    officerName: 'רנ"ג ישראל ישראלי',
    status: "פעיל",
    interestLevel: 'רמ"ד',
  },
  {
    taskNumber: "12345",
    taskName: "שם משימה שם משימה שם משימה",
    missionType: "סוג משימה",
    year: "2024",
    gamash: "תחמושת",
    openDate: "01/01/2024",
    closeDate: "02/02/2024",
    officerName: 'רנ"ג ישראל ישראלי',
    status: "פעיל",
    interestLevel: 'רמ"ד',
  },
  {
    taskNumber: "12345",
    taskName: "שם משימה שם משימה שם משימה",
    missionType: "סוג משימה",
    year: "2024",
    gamash: "תחמושת",
    openDate: "01/01/2024",
    closeDate: "02/02/2024",
    officerName: 'רנ"ג ישראל ישראלי',
    status: "פעיל",
    interestLevel: 'רמ"ד',
  },
  {
    taskNumber: "12111",
    taskName: "שם משימה שם משימה שם משימה",
    missionType: "סוג משימה",
    year: "2024",
    gamash: "תחמושת",
    openDate: "01/01/2024",
    closeDate: "02/02/2024",
    officerName: 'רנ"ג ישראל ישראלי',
    status: "פעיל",
    interestLevel: 'רמ"ד',
  },
];

export default function page() {
  const [updateMode, setUpdateMode] = useState(null);

  //FOR CONTAIN THE EMPLOYEES
  const [missions, setMissions] = useState([]);

  const [showPopupNewMission, setShowPopupNewMission] = useState(false);
  //SHOW THE FREEZE POP UP
  const [showConfirmation, setShowConfirmation] = useState(false);

  //CONTAIN THE EMPLOYEE TO FREEZE
  const [missionIdToDelete, setMissionIdToDelete] = useState(null);

  const headers = [
    "מספר משימה",
    "שם משימה",
    "סוג משימה",
    "שנה",
    'ג"מש',
    "ת.פתיחה",
    "ת.סגירה",
    "שם קצין נושא",
    "סטטוס",
    "רמת עניין",
  ];

  {
    /*DELETE  EMPLOYEES*/
  }
  const deleteMission = async (mission) => {
    console.log(mission, "gg");

    try {
      setMissionIdToDelete(mission);
      setShowConfirmation(true);
    } catch (error) {
      console.error("error delete mission: ", error);
    }
  };

  const handleAddMission = () => {
    setShowPopupNewMission(true);
  };

  //ADD NEW ROW TO ADD EMPLOYEE
  const handleSubmit = (e) => {
    e.preventDefault();
    const newMission = {
      taskNumber: e.target.taskNumber.value,
      taskName: e.target.taskName.value,
      missionType: e.target.missionType.value,
      year: e.target.year.value,
      gamash: e.target.gamash.value,
      openDate: e.target.openDate.value,
      closeDate: e.target.closeDate.value,
      officerName: e.target.officerName.value,
      status: e.target.status.value,
      interestLevel: e.target.interestLevel.value,
    };

    setMissions((prev) => [newMission, ...prev]);
    setShowPopupNewMission(false);
  };

  const add = (
    <Image src={"/addEmployee.svg"} width={20} height={20} alt="plus" />
  );

  return (
    <div className="h-full px-3  ">
      <div className="flex w-full">
        <div className=" w-[70%]  flex ">
          <Search
            className="w-full"
            textBtn={"הוסף משימה"}
            addImage={add}
            addNew={handleAddMission}
          />
        </div>

        <div className="flex gap-3 w-">
          <div className="bg-[#002A78] p h-full text-white text-xl rounded-full text-center items-center flex justify-center ">
            <div className="ml-2">
              <Image
                src={"/downloadArrow.svg"}
                width={20}
                height={20}
                alt="download"
              />
            </div>
            הפקת דוח דיווח ימי עמדה
          </div>

          <div className="bg-[#1D7044] w-[35%]  h-full text-white text-xl rounded-full text-center items-center flex justify-center ">
            ייצוא לאקסל
          </div>
        </div>
      </div>

      <MissionTable
        
        data={data}
        updateMode={updateMode}
        setUpdateMode={setUpdateMode}
        headTable={headers}
        deleteEmployee={deleteMission}
      />

      {showConfirmation && (
        <PopupDelete
          popUpState={showConfirmation}
          objectToDelete={missionIdToDelete}
          showPopup={setShowConfirmation}
          headerText={`מחיקת משימה`}
          messageText={"האם אתה בטוח שאתה רוצה למחוק את משימה "}
          btnText={"מחק"}
        />
      )}

      {showPopupNewMission && (
        <PopupMission
          showPopup={showPopupNewMission}
          setShowPopup={setShowPopupNewMission}
          handleSubmit={handleSubmit}
        />
      )}
    </div>
  );
}

{
  /* <PopupMissin/> */
}
