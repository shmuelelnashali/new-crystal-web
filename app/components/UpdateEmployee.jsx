import React, { useState } from "react";
import Image from "next/image";

export default function UpdateEmployee({
  data,
  index,
  setUpdateMode,
  handleChange,
  toggleUpdateInput,
  setToggleUpdateInput,
  ifEmpty,
}) {
  //STATE FOR OPTION
  const [selectOption, setSelectOption] = useState(null);

  const optionsMap = {
    solder: ["אזרח", "חייל"],
    department: ["רכבים", "משקים והמטות"],
    branch: ["נגמש", "טנקים"],
    mador: ["נסא", "אמת"],
    hescem: ["40", "1"],
  };

  //THE FORMAT DATE
  const formatDate = (dateString) => {
    if (dateString.includes("-")) {
      return dateString;
    }
    const [day, month, year] = dateString.split("/");
    return `${year}-${month}-${day}`;
  };

  //OPEN THE OPTION
  const handleOpen = (key) => {
    setSelectOption(key);
    setToggleUpdateInput(!toggleUpdateInput);
  };

  //CHECK IF THE START DATE BIGGER THEN END DATE
  const handleDateChange = (e, id, key) => {
    if (key === "start") {
      const endDate = formatDate(data.end);
      const newStartDate = e.target.value;
      if (newStartDate > endDate) {
        alert("תאריך התחלה לא יכול להיות גדול מתאריך סיום");
        return;
      }
    } else if (key === "end") {
      const startDate = formatDate(data.start);
      const newEndDate = e.target.value;
      if (newEndDate < startDate) {
        alert("תאריך סיום לא יכול להיות קטן מתאריך התחלה");
        return;
      }
    }
    handleChange(e, id, key);
  };

  return (
    <>
      {Object.entries(data).map(([key, value]) => (
        <div
          dir="rtl"
          key={key}
          className={`relative ${optionsMap[key] ? "flex " : ""}`}
        >
          <input
            onClick={(e) => {
              setUpdateMode(null);
              handleOpen(key);
            }}
            onChange={(e) => {
              handleDateChange(e, data.id, key);
            }}
            className={`border w-full rounded-full  text-right pr-2 pl-4 border-[#002A78] ${
              key === "start" || key === "end" ? "pl-1 pr-3 " : ""
            } `}
            type={key === "start" || key === "end" ? "date" : "text"}
            value={key === "start" || key === "end" ? formatDate(value) : value}
          />

          {ifEmpty && value === "" && (
            <div className="absolute text-red-600 text-sm font-medium mr-5">שדה זה חסר</div>
          )}

          {optionsMap[key] && (
            <div className="absolute left-2 top-1/2 transform -translate-y-1/2">
              <Image
                src={"/optionArrow.svg"}
                width={7}
                height={7}
                alt="arrow"
              />
            </div>
          )}
          {toggleUpdateInput && optionsMap[key] && selectOption === key && (
            <div className="absolute inset-y-7 w-full z-20 mt-1 border  rounded ">
              <ul className="flex flex-col  p-1  bg-white rounded shadowForDrop">
                {optionsMap[key].map((option, index) => (
                  <li
                    className="  w-full cursor-pointer py-2 px-4  rounded  text-[#002A78]  hover:bg-[#002A78] hover:text-white"
                    onClick={(e) => {
                      handleOpen(key);
                      setSelectOption(null);
                      handleChange({ target: { value: option } }, data.id, key);
                    }}
                    key={index}
                  >
                    {option}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </>
  );
}

// export default function UpdateEmployee({setUpdate}) {
//   const [employeesToUpdate, setEmployeesToUpdate] = useState([]);
//   const [showConfirmation, setShowConfirmation] = useState(false);
//   const [employeeIdToDelete, setEmployeeIdToDelete] = useState(null);

//   const fetchEmployeesToUpdate = async () => {
//     try {
//       const response = await axios.get(`https://dummyjson.com/users`);
//       const data = response.data.users;
//       setEmployeesToUpdate(data);
//     } catch (error) {
//       console.error("error fetching employees: ", error);
//     }
//   };

//   useEffect(() => {
//     fetchEmployeesToUpdate();
//   }, []);

//   const handleChange = (e, id, field) => {
//     const updatedEmployees = employeesToUpdate.map((employee) => {
//       if (employee.id === id) {
//         return { ...employee, [field]: e.target.value };
//       }
//       return employee;
//     });
//     setEmployeesToUpdate(updatedEmployees);
//   };

//   const updateEmployee = async (id) => {
//     try {
//       const employeeToUpdate = employeesToUpdate.find(
//         (employee) => employee.id === id
//       );
//       console.log(employeeToUpdate, "ff");
//       if (!employeeToUpdate) {
//         console.error("Employee not found.");
//         return;
//       }
//       await axios.put(`https://dummyjson.com/users/${id}`, employeeToUpdate);
//       setEmployeesToUpdate((prevEmployees) => {
//         const updatedEmployees = prevEmployees.map((employee) => {
//           if (employee.id === id) {
//             return employeeToUpdate;
//           }
//           return employee;
//         });
//         return updatedEmployees;
//       });
//     } catch (error) {
//       console.error("error updating employee: ", error);
//     }
//   };
