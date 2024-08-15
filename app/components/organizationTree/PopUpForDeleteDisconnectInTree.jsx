"use client";
import styled from "styled-components";
import { useReactFlow } from "reactflow";
import { useState } from "react";

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
}) {
  const [shoePopUpDelete, setShoePopUpDelete] = useState(false);
  const { setEdges } = useReactFlow();

  const disconnectEdge = () => {
    setEdges((prevEdges) =>
      prevEdges.filter((edge) => !filteredIds.includes(edge.id))
    );
  };

  const deleteNode = () => {setShoePopUpDelete(true)};

  const options = [
    { name: "מחק", func: deleteNode },
    { name: "נתק מחלקה", func: disconnectEdge },
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
          <span style={{ paddingRight: "12px" }}>{option.name}</span>
        </Item>
      ))}
    </Container>
  );
}
