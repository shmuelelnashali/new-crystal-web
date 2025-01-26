"use client";

import { useState } from "react";
import BtnForAddNewUnit from "./BtnForAddNewUnit";
import SelectNewUnitType from "./SelectNewUnitType";
import { PopUpCreateNewUnit } from "./PopUpCreateNewUnit";

export default function BtnWithSelectPopUp({
  popUpSelectUnit,
  setPopUpSelectUnit,
  setNodes,
  unitName,
  setUnitName,
  selectedLevel,
  setSelectedLevel,
  setUnitToDeleteOrDisconnect,
  employees,
  setEmployeesNumber,
  setPopUpDeleteEmptyUnit,
  setPopUpForDeleteInClient,
  displayPopUpCreateNewUnit,
  setDisplayPopUpCreateNewUnit,
}) {
  const [idCounter, setIdCounter] = useState(0);

  return (
    <div className="relative">
      <BtnForAddNewUnit setPopUpSelectUnit={setPopUpSelectUnit} />

      {popUpSelectUnit && (
        <SelectNewUnitType
          setDisplayPopUpCreateNewUnit={setDisplayPopUpCreateNewUnit}
          setPopUpSelectUnit={setPopUpSelectUnit}
          setSelectedLevel={setSelectedLevel}
        />
      )}

      {displayPopUpCreateNewUnit && (
        <PopUpCreateNewUnit
          setDisplayPopUpCreateNewUnit={setDisplayPopUpCreateNewUnit}
          selectedLevel={selectedLevel}
          setNodes={setNodes}
          unitName={unitName}
          setUnitName={setUnitName}
          setUnitToDeleteOrDisconnect={setUnitToDeleteOrDisconnect}
          employees={employees}
          setEmployeesNumber={setEmployeesNumber}
          setPopUpDeleteEmptyUnit={setPopUpDeleteEmptyUnit}
          idCounter={idCounter}
          setIdCounter={setIdCounter}
          setPopUpForDeleteInClient={setPopUpForDeleteInClient}
        />
      )}
    </div>
  );
}
