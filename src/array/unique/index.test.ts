import { expect, it } from "vitest";
import { unique } from ".";

it("should return unique values", () => {
	expect(unique([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toEqual([
		1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
	]);
});

it("should reduce to unique values", () => {
	expect(
		unique([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
	).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});

it("should be empty", () => {
	expect(unique([])).toEqual([]);
});
