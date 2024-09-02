import { it, expect } from "vitest";
import { isNumber } from ".";

it("can check if a value is a number", () => {
	expect(isNumber(1)).toBe(true);
});

it("handles strings", () => {
	expect(isNumber("1")).toBe(true);
	expect(isNumber("")).toBe(false);
});

it("handles blanks", () => {
	expect(isNumber(null)).toBe(false);
	expect(isNumber(undefined)).toBe(false);
	expect(isNumber({})).toBe(false);
});
