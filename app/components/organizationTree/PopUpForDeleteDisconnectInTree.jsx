"use client";
import styled from "styled-components";
import { useReactFlow } from "reactflow";
import axios from "@/app/lib/Axios";
import { useEffect } from "react";

const Container = styled.div`
  width: 225px;
  height: 77px;
  background-color: #ffffff;
  border: 0.6px solid #000000cc;
  border-radius: 8px;
  display: grid;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 10px #ffffff80;
  position: absolute;
  top: -20px;
  left: -40px;
  z-index: 10;
`;

const Item = styled.div`
  width: 209px;
  height: 27px;
  border-radius: 4px;
  color: #002a78;
  font-weight: 600;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: end;
  cursor: pointer;

  &:hover {
    background-color: #002a78;
    color: #ffffff;
  }
`;

export default function PopUpForDeleteDisconnectInTree({
  setShowPopUp,
  filteredIds,
  setShowPopUpDelete,
  setShowPopUpDisconnect,
  setEmployeesNumber,
  unitToDeleteOrDisconnect,
}) {
  // const { setEdges } = useReactFlow();

  const getAllEmployees = async () => {
    try {
      const respons = await axios.get("employees");
      return respons.data;
    } catch (error) {
      console.error(error);
    }
  };

  const getEmployeesNumberByDepartment = async () => {
    const allEmployees = await getAllEmployees();
    const employeesByDepartment = allEmployees.filter(
      (employee) => employee.department_name === unitToDeleteOrDisconnect.name
    ).length;

    return employeesByDepartment;
  };

  useEffect(() => {
    const getEmployeesNumber = async () => {
      if (unitToDeleteOrDisconnect) {
        const count = await getEmployeesNumberByDepartment();
        console.log(count);
        
        setEmployeesNumber(count);
      }
    };

    getEmployeesNumber();
  }, [unitToDeleteOrDisconnect]);


  // const disconnectEdge = () => {
  //   setEdges((prevEdges) =>
  //     prevEdges.filter((edge) => !filteredIds.includes(edge.id))
  //   );
  // };

  const deleteNodePopUp = () => {
    setShowPopUpDelete(true);
  };
  const disconnectNodePopUp = () => {
    setShowPopUpDisconnect(true);
  };

  const options = [
    { name: "מחק", func: deleteNodePopUp },
    { name: "נתק מחלקה", func: disconnectNodePopUp },
  ];

  return (
    <Container>
      {options.map((option, index) => (
        <Item
          key={index}
          onClick={() => {
            option.func();
            setShowPopUp(false);
          }}
        >
          <span className="pr-3">{option.name}</span>
        </Item>
      ))}
    </Container>
  );
}
