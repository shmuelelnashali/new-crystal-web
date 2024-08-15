import PopUpForTree from "./PopUpForTree";
import BtnForOrganizationTree from "./BtnForOrganizationTree";

export default function BtnWithSelectPopUp({
  showPopUp,
  setShowPopUp,
  addNewNodeInClient,
}) {
  return (
    <div style={{ display: "inline-block", position: "relative"}}>
      <BtnForOrganizationTree setShowPopUp={setShowPopUp} />
      {showPopUp && <PopUpForTree addNewNodeInClient={addNewNodeInClient} />}
    </div>
  );
}
