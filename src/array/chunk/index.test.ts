import { it, expect } from "vitest";
import { chunk } from ".";

it("splits an array into chunks of the given size", () => {
	expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
	expect(chunk([1, 2, 3, 4, 5, 6], 3)).toEqual([
		[1, 2, 3],
		[4, 5, 6],
	]);
});

it("returns an empty array when given an empty array", () => {
	expect(chunk([], 2)).toEqual([]);
});

it("returns the entire array as a single chunk if the chunk size is greater than the array length", () => {
	expect(chunk([1, 2, 3], 5)).toEqual([[1, 2, 3]]);
});

it("does not modify the original array", () => {
	const original = [1, 2, 3, 4, 5];
	chunk(original, 2);
	expect(original).toEqual([1, 2, 3, 4, 5]);
});

it("throws an error for no chunk size", () => {
	expect(() => chunk([1, 2, 3], 0)).toThrowError();
});

it("chunks an array with a chunk size that doesn't evenly divide the array length", () => {
	expect(chunk([1, 2, 3, 4, 5], 3)).toEqual([
		[1, 2, 3],
		[4, 5],
	]);
});
