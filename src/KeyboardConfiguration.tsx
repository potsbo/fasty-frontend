import { createContext } from "react";
import { LayoutName, converter, getLayoutConverter } from "./Keyboard";

interface Config {
  convert: converter;
}

const defaultConfig: Config = {
  convert: getLayoutConverter(LayoutName.Qwerty, LayoutName.Dvorak),
};

export const KeyboardContext = createContext(defaultConfig);
