import { it, expect } from "vitest";
import { mask } from ".";

it("can mask part of a string", () => {
	expect(mask("1234567890", "*", 4)).toBe("****567890");
	expect(mask("1234567890", "*", 4, 2)).toBe("****56****");
});
