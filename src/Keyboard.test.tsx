import { getLayoutConverter, LayoutName } from "./Keyboard";

it("converts from qwerty to dvorak", () => {
  const convert = getLayoutConverter(LayoutName.Qwerty, LayoutName.Dvorak);
  expect(convert("a")).toBe("a");
  expect(convert("m")).toBe("m");
  expect(convert("s")).toBe("o");
  expect(convert("q")).toBe("'");
});
