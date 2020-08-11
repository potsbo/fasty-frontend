import { getLayoutConverter, LayoutName } from "./Keyboard";

it("converts from qwerty to dvorak", () => {
  const convert = getLayoutConverter(LayoutName.Qwerty, LayoutName.Dvorak);
  expect(convert("a")).toBe("a");
  expect(convert("m")).toBe("m");
  expect(convert("s")).toBe("o");
  expect(convert("q")).toBe("'");
});

it("converts from dvorak to left handed dvorak", () => {
  const convert = getLayoutConverter(LayoutName.Dvorak, LayoutName.LDvorak);
  expect(convert("a")).toBe("-");
  expect(convert("m")).toBe("i");
  expect(convert("s")).toBe("8");
  expect(convert("q")).toBe("x");
});

it("converts from dvorak to right handed dvorak", () => {
  const convert = getLayoutConverter(LayoutName.Dvorak, LayoutName.RDvorak);
  expect(convert("a")).toBe("7");
  expect(convert("m")).toBe("w");
  expect(convert("s")).toBe("k");
  expect(convert("q")).toBe("0");
});
