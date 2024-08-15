import Image from "next/image";
import plusForTree from "@/public/plusForTree.svg";


export default function BtnForOrganizationTree({ setShowPopUp}) {
  

  return (
    <div style={{ padding: "20px" }}>
      <button
        onClick={(e) => {e.stopPropagation(), setShowPopUp(true)}}
        style={{
          backgroundColor: "#002A78",
          width: "128px",
          height: "42px",
          border: "none",
          borderRadius: "35px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer"
        }}
      >
        <span
          style={{
            color: "#FFFFFF",
            fontSize: "20px",
            lineHeight: "30px",
            marginRight: "8px",
          }}
        >
          הוסף
        </span>
        <Image src={plusForTree} alt="plusForTree" width={20} height={20} />
      </button>
      
    </div>
  );
}
