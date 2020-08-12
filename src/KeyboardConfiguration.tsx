import { createContext } from "react";
import { LayoutName, converter, getLayoutConverter } from "./Keyboard";

export interface Config {
  physical: LayoutName;
  logical: LayoutName;
  convert: converter;
}

export const getNewConfig = (physical: LayoutName, logical: LayoutName): Config => {
  return {
    physical,
    logical,
    convert: getLayoutConverter(physical, logical),
  };
};

export const defaultConfig = getNewConfig(LayoutName.Qwerty, LayoutName.Dvorak);

export const KeyboardContext = createContext(defaultConfig);
