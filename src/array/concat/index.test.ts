import { expect, it } from "vitest";
import { concat } from ".";

it("concatenates arrays", () => {
	expect(concat([1, 2, 3], [4, 5, 6])).toEqual([1, 2, 3, 4, 5, 6]);
});

it("concatenates arrays with different depths", () => {
	expect(concat([1, 2, 3], [4], [7, [8, [9]]])).toEqual([
		1,
		2,
		3,
		4,
		7,
		[8, [9]],
	]);
});

it("concatenates an empty array", () => {
	expect(concat([], [1, 2, 3])).toEqual([1, 2, 3]);
});
