import React, { useState } from "react";
import NewRequirement from "../../components/financialRequirements/NewRequirement";
import Table from "@/app/components/financialRequirements/Table";
import toast, { Toaster } from "react-hot-toast";
// import MissionTable from "@/app/components/missions/Tables";
import Tables from "@/app/components/missions/Tables";
import FilterMission from "@/app/components/missions/FilterMission";
import { isEqual, isWithinInterval, parse, set } from "date-fns";
import Image from "next/image";
import { se } from "date-fns/locale";
import PopupDelete from "@/app/components/PopupDelete";
import Search from "@/app/components/ui/Search";
export default function MissionStatus() {
  const data = [
    {
      task_number: "9988776655",
      experiment_name: "ניסוי מתקדם",
      officer_name: "רס”ן רועי פרץ",
      department: ["מדור 99", "מדור 01"],
      handler: "רועי פרץ",
      active: true,
      task_status: "חדשה",
    },
    {
      task_number: "4455667788",
      experiment_name: "ניסוי טכנולוגי",
      officer_name: "סרן יעקב רז",
      department: ["מדור 65", "מדור 98"],
      handler: "יעקב רז",
      active: false,
      task_status: "מבוטלת",
    },
    {
      task_number: "5566778899",
      experiment_name: "ניסוי עמידות",
      officer_name: "רנ”ג משה שמש",
      department: ["מדור 564", "מדור 6455"],
      handler: "משה שמש",
      active: true,
      task_status: "עודכנה משימה",
    },
    {
      task_number: "1122334455",
      experiment_name: "ניסוי אלקטרוני",
      officer_name: "רס”ן אבי לוי",
      department: ["מדור 44", "76"],
      handler: "אבי לוי",
      active: false,
      task_status: 'נדחתה רמ"ד',
    },
    {
      task_number: "9876543210",
      experiment_name: "ניסוי בטיחות",
      officer_name: "סא”ל דוד כהן",
      department: ["מדור 12", "מדור 453"],
      handler: "דוד כהן",
      active: true,
      task_status: 'ממתין לאישור גמ"ש',
    },
    {
      task_number: "9876773210",
      experiment_name: "ניסוי בטיחות",
      officer_name: "סא”ל משה כהן",
      department: ["מדור 12", "מדור 453"],
      handler: "משה כהן",
      active: true,
      task_status: 'ממתין לאישור רמ"ד',
    },
    {
      task_number: "9876773210",
      experiment_name: "ניסוי בטיחות",
      officer_name: "סא”ל משה כהן",
      department: ["מדור 12", "מדור 453"],
      handler: "משה כהן",
      active: true,
      task_status: 'ממתין לאישור תו"פ',
    },
    {
      task_number: "1234567890",
      experiment_name: "שם ניסוי 1",
      officer_name: "רנ”ג ישראל ישראלי",
      department: ["מדור 3", "מדור 32"],
      handler: "ישראל ישראלי",
      active: true,
      task_status: "נפתחה משימה",
    },
    {
      task_number: "1234567890",
      experiment_name: "שם ניסוי 1",
      officer_name: "רנ”ג ישראל ישראלי",
      department: ["מדור 3", "מדור 32"],
      handler: "ישראל ישראלי",
      active: true,
      task_status: 'נדחתה רמ"ד',
    },
  ];
  // console.log(headers);

  // return (
  //   <div className="px-10  py-2 h-full dirLtr overflow-y-auto">
  {
    /* <Table data={data} headTable={headers} /> */
  }

  const [filterPopUp, setFilterPopUp] = useState(false);
  // מביא את הסינון
  const [filterData, setFilterData] = useState(null);
  // המשימות שמגיעות מהשרת
  const [missions, setMissions] = useState(data);
  const [missionsSearch, setMissionsSearch] = useState(data);

  // מכיל את מה שצריך לסנן עליו
  const [formData, setFormData] = useState(data || {});

  // מחיקת משימה
  const [deleteMission, setDeleteMission] = useState(null);

  //פןפאפ מחיקה
  const [showConfirmation, setShowConfirmation] = useState(false);

  // מביא את כל המשימות או את הסינון
  const showMissionsOrFilter = filterData
    ? missions.filter((mission) => {
        let matches = true;

        // פילטר מדור - בודק אם יש חפיפה בין המערכים
        if (filterData?.department && filterData.department.length > 0) {
          // בודק אם יש לפחות ערך אחד משותף בין המערכים
          const hasCommonDepartment = filterData.department.some(
            (selectedDep) => mission.department.includes(selectedDep)
          );
          if (!hasCommonDepartment) {
            matches = false;
          }
        }
        // פילטר לקוח
        if (
          filterData?.officer_name &&
          mission.officer_name !== filterData.officer_name
        ) {
          matches = false;
        }
        // פילטר סטטוס
        if (
          filterData?.task_status &&
          mission.task_status !== filterData.task_status
        ) {
          matches = false;
        }
        // פילטר סטטוס מטפל
        if (filterData?.active && mission.active !== filterData.active) {
          matches = false;
        }

        return matches;
      })
    : missions;

  const headers = {
    "מספר משימה": {
      field: "task_number",
      type: "string",
    },
    "שם ניסוי": {
      field: "experiment_name",
      type: "string",
    },

    "שם קצין נושא": {
      field: "officer_name",
      type: "string",
    },
    מדור: {
      field: "department",
      type: "string",
    },
    לקוח: {
      field: "handler",
      type: "string",
    },
    "סטטוס מטפל": {
      field: "active",
      type: "boolean",
    },
    סטטוס: {
      field: "task_status",
      type: "string",
    },
  };

  console.log(headers);

  const handlePopUpFilter = () => {
    setFilterPopUp(!filterPopUp);
  };

  // מסנן את המשימות לפי בחירה
  const filterSearch = (formData) => {
    setFilterData(formData);
  };

  const closeAndResetFilter = () => {
    setFilterPopUp(false);
    setFilterData(null);
    setFormData({});
    toast(`הסינון בוטל`, {
      icon: "✅",
      duration: 1500,
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });
  };

  const deleteMissionById = async (mission) => {
    try {
      setDeleteMission(mission);
      setShowConfirmation(true);
    } catch (error) {
      console.error("error delete mission: ", error);
    }
  };

  const imageAdd = (
    <Image src={"/addEmployee.svg"} width={20} height={20} alt="plus" />
  );

  return (
    <div className="h-full px-3   ">
      <div className="flex dirRtl  gap-3 w-full justify-between items-center ">
        <div className="w-1/2">
          <Search
            searchItems={missionsSearch}
            setItems={setMissions}
            // formatData={formatData}
            // addNew={handleAddingNewRow}
            textBtn={"צור חדש"}
            addImage={imageAdd}
            searchText={"חיפוש"}
          />
        </div>
        <div
          onClick={handlePopUpFilter}
          className=" relative  flex text-xl text-center hover:cursor-pointer items-center font-medium  justify-end border-2 border-[#002A78] rounded-full"
        >
          <div className="px-3 flex gap-2  truncate">
            <Image src={"/filter.svg"} width={16} height={14} alt="download" />
            <div>סינון</div>
          </div>

          {filterPopUp && (
            <FilterMission
              setFilterPopUp={setFilterPopUp}
              filterPopUp={filterPopUp}
              filterSearch={filterSearch}
              closeAndResetFilter={closeAndResetFilter}
              closeFilter={setFilterPopUp}
              formData={formData}
              setFormData={setFormData}
              labels={labels}
            />
          )}
        </div>
      </div>{" "}
      <div className="   py-2 h-full dirLtr overflow-y-auto">
        <Tables
          data={showMissionsOrFilter}
          headTable={Object.keys(headers)}
          headers={headers}
          deleteRowObj={deleteMissionById}
        />
        {showConfirmation && (
          <PopupDelete
            popUpState={showConfirmation}
            objectToDelete={deleteMission}
            showPopup={setShowConfirmation}
            headerText={`העברת משימה למצב "לא פעיל"`}
            messageText={"האם אתה בטוח שאתה רוצה למחוק את המשימה"}
            btnText={"המשך"}
            urlPage={`/financialRequirements`}
          />
        )}
      </div>
    </div>
  );
}
const labels = [
  { label: "מדור", labelName: "department" },
  { label: "שם קצין נושא", labelName: "officer_name" },
  { label: "סטטוס", labelName: "task_status" },
];
