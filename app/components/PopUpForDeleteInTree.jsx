import styled from "styled-components";

const Container = styled.div`
  width: 161px;
  height: 43px;
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

export default function PopUpForDeleteInTree({setShowPopUp}) {
  return (
    <Container>
      <Item onClick={() => setShowPopUp(false)}>
        <span style={{ paddingRight: "12px" }}>מחק</span>
      </Item>
    </Container>
  );
}
