import { expect, it } from "vitest";
import { sort } from ".";

it("should sort an array", () => {
	expect(sort([3, 1, 2])).toEqual([1, 2, 3]);
});

it("should sort with a custom compare function", () => {
	expect(sort([3, 1, 2], (a, b) => b - a)).toEqual([3, 2, 1]);
});

it("should be empty if the array is empty", () => {
	expect(sort([])).toEqual([]);
});
