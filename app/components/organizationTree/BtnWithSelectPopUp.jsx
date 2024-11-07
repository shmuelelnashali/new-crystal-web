"use client";

import { useState } from "react";
import BtnForOrganizationTree from "./BtnForOrganizationTree";
import PopUpForTree from "./PopUpForTree";
import PopUpCreateUnit from "./PopUpCreateUnit";

export default function BtnWithSelectPopUp({
  showPopUpSelectUnit,
  setShowPopUpSelectUnit,
  addNewNodeInClient,
}) {
  const [showPopUpCreateUnit, setShowPopUpCreateUnit] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState(null);



  return (
    <div className="relative">
      <BtnForOrganizationTree
        setShowPopUpSelectUnit={setShowPopUpSelectUnit}
      />
     
      {showPopUpSelectUnit && <PopUpForTree
        setShowPopUpCreateUnit={setShowPopUpCreateUnit}
        setSelectedLevel={setSelectedLevel}
      />}
      

      {showPopUpCreateUnit && (
        <PopUpCreateUnit
          selectedLevel={selectedLevel}
          addNewNodeInClient={addNewNodeInClient}
          setShowPopUpCreateUnit={setShowPopUpCreateUnit}
        />
      )}
    </div>
  );
}
