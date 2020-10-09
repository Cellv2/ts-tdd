import { add } from "./add";

test("basic", () => {
    expect(add()).toBe(0);
});

test("basic two", () => {
    expect(add(2, 3)).toBe(2 + 3);
});
