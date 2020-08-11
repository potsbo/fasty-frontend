import React, { useState, useMemo } from "react";
import useKeypress from "react-use-keypress";
import Keyboard, { LayoutName, getLayoutConverter } from "./Keyboard";
import styled from "styled-components/macro";

const lowers = Array.from({ length: 26 }, (_, i) => String.fromCharCode("a".charCodeAt(0) + i));
const uppers = Array.from({ length: 26 }, (_, i) => String.fromCharCode("A".charCodeAt(0) + i));
const symbols = ` ',.;`.split("");
const trapKeys = lowers.concat(uppers, symbols);

const VirtualKeyboard = () => {
  const [logicalLayout, setLogicalLayout] = useState(LayoutName.Dvorak);
  const [phisicalLayout, setPhisicalLayout] = useState(LayoutName.Dvorak);
  const [activeKeys, setActiveKeys] = useState(new Set<string>());
  const convert: (key: string) => string | null = useMemo(() => getLayoutConverter(phisicalLayout, logicalLayout), [
    phisicalLayout,
    logicalLayout,
  ]);

  // TODO: get key up event to deactivate
  useKeypress(trapKeys, (event: KeyboardEvent) => {
    if (event.metaKey) {
      return;
    }
    if (event.ctrlKey) {
      return;
    }

    setActiveKeys((curr) => {
      const converted = convert(event.key);
      if (converted === null) {
        return curr;
      }

      return new Set<string>([converted]);
    });
  });

  const layouts = [LayoutName.Dvorak, LayoutName.Qwerty];

  return (
    <Wrapper>
      <div>
        <h3 style={{ fontFamily: "Helvetica" }}>phisical layout</h3>
        <div style={{ display: "flex" }}>
          {layouts.map((l) => {
            return (
              <RoundButton
                theme={{ active: phisicalLayout === l }}
                onClick={() => {
                  setPhisicalLayout(l);
                }}
                key={l}
              >
                {l}
              </RoundButton>
            );
          })}
        </div>
      </div>
      <div>
        <h3 style={{ fontFamily: "Helvetica" }}>phisical layout</h3>
        <div style={{ display: "flex" }}>
          {layouts.map((l) => {
            return (
              <RoundButton
                theme={{ active: logicalLayout === l }}
                onClick={() => {
                  setLogicalLayout(l);
                }}
                key={l}
              >
                {l}
              </RoundButton>
            );
          })}
        </div>
      </div>
      <div style={{ marginTop: "16px" }}>
        <Keyboard layout={logicalLayout} activeKeys={activeKeys} />
      </div>
    </Wrapper>
  );
};

export default VirtualKeyboard;

const Wrapper = styled.div`
  width: 720px;
  margin: auto;
`;

const RoundButton = styled.button`
  box-sizing: border-box;
  display: flex;

  background-color: ${(props) => (props.theme.active ? "#00a2ff" : "white")};
  color: ${(props) => (props.theme.active ? "white" : "gray")};
  height: 36px;
  width: 72px;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  border-radius: 18px;
  border-color: gray;
  border: ${(props) => (props.theme.active ? "none" : "solid")};
  border-width: 2px;

  margin: 8px;

  transition: 0.2s;
  transition-timing-function: ease;

  &:focus {
    border: none;
    outline: 0;
  }
`;
