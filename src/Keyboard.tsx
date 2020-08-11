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
  activeKeys: Set<string>;
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

interface Position {
  row: number;
  column: number;
}

const extractPosition = (layout: Layout, key: string): Position | null => {
  for (let row = 0; row < layout.rows.length; row++) {
    for (let column = 0; column < layout.rows[row].keys.length; column++) {
      if (layout.rows[row].keys[column].face.toLowerCase() === key.toLowerCase()) {
        return { row, column };
      }
    }
  }

  return null;
};

const findKey = (layout: Layout, position: Position): string | null => {
  const row = layout.rows[position.row];
  if (row === undefined) {
    return null;
  }

  const key = row.keys[position.column];
  if (key === undefined) {
    return null;
  }

  return key.face.toLowerCase();
};

type converter = (key: string) => string | null;

export const getLayoutConverter = (from: LayoutName, to: LayoutName): converter => {
  const fromLayout = layouts.get(from);
  if (fromLayout === undefined) {
    return (_: string) => null;
  }

  const toLayout = layouts.get(to);
  if (toLayout === undefined) {
    return (_: string) => null;
  }

  return (key: string): string | null => {
    const p = extractPosition(fromLayout, key);
    if (p === null) {
      return null;
    }

    return findKey(toLayout, p);
  };
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
    const keys = r.keys.map((k) => {
      return (
        <KeyView key={k.face} theme={{ active: props.activeKeys.has(k.face.toLowerCase()) }}>
          {k.face}
        </KeyView>
      );
    });
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
  color: ${(props) => (props.theme.active ? "lightgray" : "gray")};
  background: ${(props) => (props.theme.active ? "orange" : "white")};
  display: flex;
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  box-shadow: ${(props) => (props.theme.active ? "none" : "0px 0px 10px 4px #dddddd")};
  margin: 8px;
  transition: 0.1s;
`;

const RowView = styled.div`
  display: flex;
  padding-left: ${(props) => props.theme.index * 16}px;
  padding-right: ${(props) => (2 - props.theme.index) * 16}px;
`;
