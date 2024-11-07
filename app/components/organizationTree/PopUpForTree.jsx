"use client";

import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 161px;
  height: 109px;
  background-color: #ffffff;
  border: 0.6px solid #000000cc;
  border-radius: 8px;
  display: grid;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 10px #ffffff80;
  position: absolute;
  top: 54px;
  left: 78px;
  z-index: 10;
`;

const Item = styled.div`
  width: 145px;
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

export default function PopUpForTree({
  setShowPopUpCreateUnit,
  setSelectedLevel,
}) {
  const arrayLevel = ["מחלקה", "ענף", "מדור"];

  return (
    <>
      <Container>
        {arrayLevel.map((level, index) => (
          <Item
            key={index}
            onClick={() => {
              setShowPopUpCreateUnit(true), setSelectedLevel(level);
            }}
          >
            <span className="pr-3">הוסף {level}</span>
          </Item>
        ))}
      </Container>
    </>
  );
}
