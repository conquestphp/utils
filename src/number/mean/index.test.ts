import { it, expect } from "vitest";
import { mean } from ".";

it("can calculate the mean of an array of numbers", () => {
	expect(mean([1, 2, 3, 4, 5])).toBe(3);
	expect(mean([1, 2, 3, 4, 5, 6])).toBe(3.5);
	expect(mean([1])).toBe(1);
});
