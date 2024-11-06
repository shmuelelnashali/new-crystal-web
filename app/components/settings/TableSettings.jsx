"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import DeleteRow from "./DeleteRow";
import Select, { components } from "react-select";

// import { getDisplayName } from "next/dist/shared/lib/utils";
const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "vana" },

];

export default function TabieSettings({ data, headers, page }) {
  const pathName = usePathname();
  const [updateIndex, setUpdateIndex] = useState();
  const [updateRow, setUpdateRow] = useState({});
  const [deleteRow, setDeleteRow] = useState();

  const handeeCanghe = (key, value) => {
    setUpdateRow((prve) => ({ ...prve, [key]: value }));
    console.log(updateRow);
  };
  const customSelectStyles = {
    control: () => ({
      border: "1px solid black",
      display: "flex",
      alignItems: "center",
      height: "26px",
      backgroundColor: "#ffffff ",
      borderRadius: 100,
      // width: "100%",
      marginLeft: 4,
    }),
    container: () => ({
      display: "flex",
      alignItems: "center",
      // height: "",
      // backgroundColor: "#F0F10F1",
      // paddingLeft: 8,
      // borderWidth: 2,
      // borderRadius: 8,
      // width: "100%",
      // marginLeft: 4,
      // zIndex: 9999,
    }),
    // option: (provided, state) => ({
    //   ...provided,
    //   marginBottom: 0,
    //   borderRadius: 6,
    //   borderBottom: 1,
    //   paddingRight: 4,
    //   paddingLeft: 4,
    //   backgroundColor: state.isSelected ? "#ffffff " : "white",
    //   color: "black",
    //   ":hover": { background: "#ffffff ", color: "black" },
    //   zIndex: 9999,
    // }),
    placeholder: (provided) => ({
      ...provided,
      textAlign: "center",
      color: "#002a78 ",
    }),
    dropdownIndicator: () => ({
      color: "#A4A4A4",
    }),
    option: (base, state) => ({
      ...base,
      display: "flex",
      justifyContent: "space-between", // Places checkbox on the right
      backgroundColor: "white",
      color: state.isSelected ? "black" : "inherit",
      direction: "rtl",
      // padding: '10px 15px',
      position: "ab",
      overflow: "hidden", // Ensure overflow is hidden for the gradient effect

      ":hover": {
        backgroundColor: "#002A78",
        color: "#ffffff",
        borderRadius: "5px",
        "&:before": {
          content: "none", // Prevents the line from appearing on hover
        },
      },
      "&:before": {
        content: '""',
        position: "absolute",
        left: "5%", // Start the shadow from 15%
        right: "5%", // End the shadow at 15%
        bottom: "0",
        height: "1px",
        backgroundColor: "#e9e9e9",
      },
      // borderRadius:'10px',
    }),
    menu: (base) => ({
      ...base,
      borderRadius: "10px", // Matching the rounded border for the dropdown menu
      // marginTop: "0px",
      position: "absolute",
      zIndex: "9999",
      paddingRight: "2px",
      // overflow: "scroll",
    }),
    menuList: (base) => ({
      ...base,
      direction: "ltr", // Change direction to right-to-left
      padding: "5px",
      // maxHeight: '200px', // Adjust this value to fit approximately 5 items
      overflowY: "auto",
      // ':hover': {
      //   cursor:'pointer'
      // },
    }),
    multiValue: (base) => ({
      ...base,
      backgroundColor: "#002A78", // Background color for selected items
      color: "white",
      borderRadius: "20px",
      height:"22px"
      // paddingRight:'5px',
      // padding: '0.3px 5px 0.3px 0px '
    }),
    multiValueLabel: (base) => ({
      
      ...base,
      display: "flex",
      padding: "0px",
      textAlign: "center",
       alignItems:"center",
      paddingLeft: "15px",
      paddingRight: "15px",
      color: "white", // Text color for selected items
    }),
    multiValueContainer: (base) => ({
      ...base,
      textAlign: "center",
     
      padding: "0px",
      paddingRight: "5px",
      color: "white", // Text color for selected items
    }),
    indicatorsContainer: (base) => ({
      ...base,
        padding: "2px", // Removes the gap between the arrow and selected options
    }),
  };

  // להביא את החץ
  const CustomDropdownIndicator = (props) => {
    return (
      <components.DropdownIndicator {...props}>
        <Image
          className="mx-2"
          src="/downArrow.svg"
          alt="Custom Arrow"
          width={10}
          height={10}
        />
      </components.DropdownIndicator>
    );
  };

  return (
    <div>
      <div className="flex-1 flex flex-col overflow-hidden  rounded-lg h-full ">
        <div className=" px-2  dirLtr h-full rounded-2xl  overflow-auto">
          <div className=" dirRtl bg-[#EFF3FB] rounded-lg h-full">
            <div className="p-2 pb-0 text-white rounded-lg sticky top-0 bg-[#EFF3FB] w-full">
              <div className="grid grid-cols-9  sticky top-0 rounded-lg p-2 bg-blue_color justify-center ">
                {headers.map((header, index) => (
                  <div
                    key={header}
                    className=" text-center  truncate font-semibold text-xl"
                  >
                    {header}
                  </div>
                ))}
                <div
                  className="text-center text-xl font-semibold col-end-10
                 "
                >
                  פעולות
                </div>
              </div>
            </div>
            <div className="flex flex-col px-2  text-base ">
              {data.map((row, rowIndex) => (
                <div
                  key={rowIndex}
                  className="grid grid-cols-9 whitespace-nowrap justify-center border-b-[2px] py-2.5"
                >
                  {Object.entries(row).map(([code_key, code_value], index) => (
                    <div
                      className={`${
                        index === Object.entries(row).length - 1 &&
                        updateIndex === rowIndex &&
                        " col-span-2 "
                      }${
                        pathName.includes("stages") &&
                        index === Object.entries(row).length - 1 &&
                        updateIndex === rowIndex &&
                        " w-full col-span-5"
                      }`}
                    >
                      {updateIndex === rowIndex && index !== 0 ? (
                        <div className="flex w-full  px-2">
                          <div
                            className={`" rounded-full flex w-full"
                             ${
                               index === Object.entries(row).length - 1 &&
                               "  bg-gradient-to-r  from-blue_color via-blue_color to-[#EFF3FB] w-full"
                             }`}
                          >
                            {code_key === "permissions" ? (
                              <div className=" absolute ">
                                <Select
                                  isMulti
                                  options={options}
                                  components={{
                                    DropdownIndicator: CustomDropdownIndicator,
                                  }}
                                  // className="absolute"
                                  styles={customSelectStyles}
                                  placeholder={updateRow[code_key] || ""}
                                />
                              </div>
                            ) : (
                              <input
                                className={`" text-center w-full rounded-full outline-none border border-blue_color "
                              `}
                                onFocus={() => handeeCanghe(code_key, "")}
                                onChange={(e) =>
                                  handeeCanghe(code_key, e.target.value)
                                }
                                value={updateRow[code_key] || ""}
                              />
                            )}

                            {index === Object.entries(row).length - 1 && (
                              <div
                                className={`${
                                  pathName.includes("stages")
                                    ? " px-4 "
                                    : " w-full "
                                }  flex justify-center border border-blue_color rounded-full text-white`}
                              >
                                שמור שינויים
                              </div>
                            )}
                          </div>
                        </div>
                      ) : (
                        <div key={index} className="text-center ">
                          {code_value}
                          {/* <span className="text-xs">{code_key.includes("price")&&' ש"ח'}</span>  */}
                        </div>
                      )}
                    </div>
                  ))}
                  <div className="flex cursor-pointer justify-around col-end-10 ">
                    <div
                      className={`${
                        updateIndex === rowIndex
                          ? "bg-blue_color/20 border border-blue_color/5"
                          : "bg-blue_color border border-blue_color"
                      }  gap-1 flex px-3 w-fit text-white rounded-full cursor-pointer "`}
                      onClick={() => {
                        setUpdateIndex(rowIndex);
                        setUpdateRow(row);
                      }}
                    >
                      <Image
                        src={"/editing.svg"}
                        width={15}
                        height={16}
                        alt={"uu"}
                      />

                      <p>עריכת שורה</p>
                    </div>

                    <Image
                      onClick={() => {
                        setDeleteRow(row), console.log(row);
                      }}
                      src={"/bit.svg"}
                      width={15}
                      height={16}
                      alt={"uu"}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div></div>
          </div>
        </div>
      </div>
      {deleteRow && <DeleteRow row={deleteRow} />}
    </div>
  );
}
