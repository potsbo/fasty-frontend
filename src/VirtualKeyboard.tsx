import React from "react";
import Keyboard, { LayoutName } from "./Keyboard";
import styled from "styled-components/macro";

const VirtualKeyboard = () => {
  return (
    <Wrapper>
      <Keyboard layout={LayoutName.Dvorak} />
    </Wrapper>
  );
};

export default VirtualKeyboard;

const Wrapper = styled.div`
  width: 640px;
  margin: auto;
`;
