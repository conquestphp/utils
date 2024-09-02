import { expect, it } from "vitest";
import { intersect } from ".";

it("should return an array with the items that are in both arrays", () => {
	expect(intersect([1, 2, 3], [2, 3, 4])).toEqual([2, 3]);
});

it("should return an empty array if there are no items in both arrays", () => {
	expect(intersect([1, 2, 3], [4, 5, 6])).toEqual([]);
});
