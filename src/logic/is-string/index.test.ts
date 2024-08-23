import { it, expect } from "vitest";
import { isString } from ".";

it("can check if a value is a string", () => {
	expect(isString("1")).toBe(true);
	expect(isString(1)).toBe(false);
});
