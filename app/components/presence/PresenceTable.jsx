import PresenceTableHead from "./PresenceTableHead";
import PresenceTableContent from "./PresenceTableContent";

export default function PresenceTable({
  data,
  setData,
  editingRowIndex,
  setEditingRowIndex,
  popUpForMission,
  setPopUpForMission,
  nameAndDateForRow,
  setNameAndDateForRow,
  selectedDate,
  setSelectedDate,
}) {
  return (
    <div className="  flex flex-col pr-2 bg-white rounded-lg relative   ">
      <PresenceTableHead />

      <PresenceTableContent
        editingRowIndex={editingRowIndex}
        setEditingRowIndex={setEditingRowIndex}
        popUpForMission={popUpForMission}
        setPopUpForMission={setPopUpForMission}
        data={data}
        setData={setData}
        nameAndDateForRow={nameAndDateForRow}
        setNameAndDateForRow={setNameAndDateForRow}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
    </div>
  );
}
