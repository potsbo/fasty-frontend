import React, { useState } from "react";
import useKeypress from "react-use-keypress";
import Keyboard, { LayoutName } from "./Keyboard";
import styled from "styled-components/macro";

const lowers = Array.from({ length: 26 }, (_, i) => String.fromCharCode("a".charCodeAt(0) + i));
const uppers = Array.from({ length: 26 }, (_, i) => String.fromCharCode("A".charCodeAt(0) + i));
const symbols = ` ',.;`.split("");
const trapKeys = lowers.concat(uppers, symbols);

const VirtualKeyboard = () => {
  const [activeKeys, setActiveKeys] = useState(new Set<string>());

  // TODO: get key up event to deactivate
  useKeypress(trapKeys, (event: KeyboardEvent) => {
    if (event.metaKey) {
      return;
    }
    if (event.ctrlKey) {
      return;
    }

    setActiveKeys((_) => {
      return new Set<string>([event.key]);
    });
  });

  return (
    <Wrapper>
      <Keyboard layout={LayoutName.Dvorak} activeKeys={activeKeys} />
    </Wrapper>
  );
};

export default VirtualKeyboard;

const Wrapper = styled.div`
  width: 640px;
  margin: auto;
`;