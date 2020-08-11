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

const layouts = [LayoutName.Dvorak, LayoutName.LDvorak, LayoutName.RDvorak, LayoutName.LRDvorak, LayoutName.Qwerty];
const alphabetes = Array.from({ length: 26 }, (_, i) => String.fromCharCode("a".charCodeAt(0) + i));

it("is invertible", () => {
  layouts.forEach((from) => {
    layouts.forEach((to) => {
      const forward = getLayoutConverter(from, to);
      const backward = getLayoutConverter(to, from);
      alphabetes.forEach((c) => {
        const b = backward(c);
        const f = forward(c);
        expect(b).not.toBe(null);
        expect(f).not.toBe(null);
        expect(forward(b as string)).toBe(c);
        expect(backward(f as string)).toBe(c);
      });
    });
  });
});

it("can be identity", () => {
  layouts.forEach((layout) => {
    const converter = getLayoutConverter(layout, layout);
    alphabetes.forEach((c) => {
      expect(converter(c)).toBe(c);
    });
  });
});
