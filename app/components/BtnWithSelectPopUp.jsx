import PopUpForTree from "./PopUpForTree";
import BtnForOrganizationTree from "./BtnForOrganizationTree";

export default function BtnWithSelectPopUp({
  showPopUp,
  setShowPopUp,
  createNewNode,
}) {
  return (
    <div style={{ display: "inline-block", position: "relative"}}>
      <BtnForOrganizationTree setShowPopUp={setShowPopUp} />
      {showPopUp && <PopUpForTree createNewNode={createNewNode} />}
    </div>
  );
}
