import { expect, it } from "vitest";
import { nth } from ".";

it("should return the nth element of the array", () => {
	expect(nth([1, 2, 3, 4, 5], 2)).toEqual([1, 3, 5]);
});

it("should return the nth element of the array with an offset", () => {
	expect(nth([1, 2, 3, 4, 5], 2, 1)).toEqual([2, 4]);
});

it("should return an empty array if the array is empty", () => {
	expect(nth([], 2)).toEqual([]);
});
