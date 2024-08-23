import { it, expect } from "vitest";
import { isBlank } from ".";

it("can check if a value is blank", () => {
	expect(isBlank(null)).toBe(true);
	expect(isBlank(undefined)).toBe(true);
	expect(isBlank("")).toBe(true);
	expect(isBlank({})).toBe(true);
	expect(isBlank([])).toBe(true);
	expect(isBlank(0)).toBe(false);
});
