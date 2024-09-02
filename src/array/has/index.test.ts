import { expect, it } from "vitest";
import { has } from ".";

it("should return true if the array contains the item", () => {
	expect(has([1, 2, 3], 2)).toBe(true);
});

it("should return false if the array does not contain the item", () => {
	expect(has([1, 2, 3], 4)).toBe(false);
});
