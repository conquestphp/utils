import { expect, it } from "vitest";
import { at } from ".";

it("returns the element at the given index", () => {
	expect(at([1, 2, 3], 1)).toEqual(2);
});

it("returns undefined if the index is out of bounds", () => {
	expect(at([1, 2, 3], 3)).toEqual(undefined);
});

it("returns the element at the given index from the end", () => {
	expect(at([1, 2, 3], -1)).toEqual(3);
});
