import { it, expect } from "vitest";
import { isNull } from ".";

it("can check if a value is null", () => {
	expect(isNull(null)).toBe(true);
	expect(isNull(undefined)).toBe(true);
	expect(isNull(0)).toBe(false);
	expect(isNull("")).toBe(false);
	expect(isNull({})).toBe(false);
});
