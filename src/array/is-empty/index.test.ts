import { expect, it } from "vitest";
import { isEmpty } from ".";

it("should return true if the array is empty", () => {
	expect(isEmpty([])).toBe(true);
});

it("should return false if the array is not empty", () => {
	expect(isEmpty([1, 2, 3])).toBe(false);
});
