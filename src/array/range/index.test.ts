import { expect, it } from "vitest";
import { range } from ".";

it("should return an array of numbers from s to e", () => {
	expect(range(1, 5)).toEqual([1, 2, 3, 4, 5]);
});

it("should return an empty array if s > e", () => {
	expect(range(5, 1)).toEqual([]);
});
