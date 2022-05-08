import { kalkulerLanebehov } from "../script";

const subtract = (a, b) => a - b;

test("shoulb be 2", () => {
  expect(kalkulerLanebehov(3, 1)).toBe(2);
});

test("should be 1", () => {
  expect(subtract(2, 1)).toBe(1);
});

test("should be a number", () => {
  expect(typeof subtract(2, 1)).toBe("number");
});
