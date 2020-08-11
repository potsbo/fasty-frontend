import React from "react";
import styled from "styled-components/macro";

interface Layout {
  rows: Row[];
}

interface Row {
  rowIndex: number;
  keys: Key[];
}

interface Key {
  face: string;
}

export enum LayoutName {
  Dvorak = "dvorak",
  Qwerty = "qwerty",
}

interface Props {
  layout: LayoutName;
}

const stringToKeys = (s: string): Key[] => {
  return s.split("").map((s) => {
    return { face: s };
  });
};

const qwerty: Layout = {
  rows: [
    { rowIndex: 0, keys: stringToKeys("QWERTYUIOP") },
    { rowIndex: 1, keys: stringToKeys("ASDFGHJKL;") },
    { rowIndex: 2, keys: stringToKeys("ZXCVBNM,./") },
  ],
};

const dvorak: Layout = {
  rows: [
    { rowIndex: 0, keys: stringToKeys(`',.PYFGCRL`) },
    { rowIndex: 1, keys: stringToKeys("AOEUIDHTNS") },
    { rowIndex: 2, keys: stringToKeys(";QJKXBMWVZ") },
  ],
};

const layouts = new Map<LayoutName, Layout>([
  [LayoutName.Dvorak, dvorak],
  [LayoutName.Qwerty, qwerty],
]);

const Keyboard = (props: Props) => {
  const layoutConfig = layouts.get(props.layout);
  if (layoutConfig === undefined) {
    return <div>not found</div>;
  }

  const layout = layoutConfig.rows.map((r) => {
    const keys = r.keys.map((k) => <KeyView key={k.face}>{k.face}</KeyView>);
    return (
      <RowView key={r.rowIndex} theme={{ index: r.rowIndex }}>
        {keys}
      </RowView>
    );
  });

  return <div>{layout}</div>;
};

export default Keyboard;

// TODO: better font
const KeyView = styled.div`
  font-family: Helvetica;
  font-size: 18px;
  font-weight: bold;
  color: gray;
  display: flex;
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  box-shadow: 0px 0px 10px 4px #dddddd;
  margin: 8px;
`;

const RowView = styled.div`
  display: flex;
  padding-left: ${(props) => props.theme.index * 16}px;
  padding-right: ${(props) => (2 - props.theme.index) * 16}px;
`;
