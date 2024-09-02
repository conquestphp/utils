import { expect, it } from "vitest";
import { first } from ".";

it("should return the first element of an array", () => {
	expect(first([1, 2, 3, 4, 5])).toEqual(1);
});

it("should return undefined for an empty array", () => {
	expect(first([])).toEqual(undefined);
});
