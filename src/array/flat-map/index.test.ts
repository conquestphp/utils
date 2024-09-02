import { expect, it } from "vitest";
import { flatMap } from ".";

it("maps each element using the given function", () => {
	expect(flatMap([1, 2, 3], (x) => [x, x * 2])).toEqual([1, 2, 2, 4, 3, 6]);
});

it("returns an empty array if the input array is empty", () => {
	expect(flatMap([], (x) => [x, x * 2])).toEqual([]);
});
