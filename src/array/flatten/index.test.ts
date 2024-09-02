import { expect, it } from "vitest";
import { flatten } from ".";

it("should flatten the array", () => {
	expect(flatten([1, 2, 3], 1)).toEqual([1, 2, 3]);
});

it("should flatten the array to depth 1 by default", () => {
	expect(flatten([1, [2, [3, [4, 5]]]])).toEqual([1, 2, [3, [4, 5]]]);
});

it("should change the depth", () => {
	expect(flatten([1, [2, [3, [4, 5]]]], 2)).toEqual([1, 2, 3, [4, 5]]);
});

it("should change the depth to infinite", () => {
	expect(flatten([1, [2, [3, [4, 5]]]], Infinity)).toEqual([1, 2, 3, 4, 5]);
});
