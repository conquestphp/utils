import { expect, it } from "vitest";
import { at } from ".";

it("should return the element at the given index", () => {
	expect(at([1, 2, 3], 1)).toEqual(2);
});

it("should return undefined if the index is out of bounds", () => {
	expect(at([1, 2, 3], 3)).toEqual(undefined);
});

it("should return undefined if the index is negative", () => {
	expect(at([1, 2, 3], -1)).toEqual(3);
});
