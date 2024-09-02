import { expect, it } from "vitest";
import { next } from ".";

it("should return the next value in the array", () => {
	expect(next([1, 2, 3], 0)).toBe(2);
});

it("should return undefined if next goes out of bounds", () => {
	expect(next([1, 2, 3], 2)).toBeUndefined();
});
