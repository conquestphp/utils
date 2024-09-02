import { expect, it } from "vitest";
import { count } from ".";

it("counts the number of elements in an array", () => {
	expect(count([1, 2, 3, 4, 5])).toEqual(5);
});

it("counts the number of elements in an empty array as zero", () => {
	expect(count([])).toEqual(0);
});

it("counts the number of elements in an array with nested arrays", () => {
	expect(count([1, [2, [3, 4], 5]])).toEqual(2);
});
