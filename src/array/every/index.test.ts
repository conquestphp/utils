import { expect, it } from "vitest";
import { every } from ".";

it("should return true if all elements in an array pass the test", () => {
	expect(every([1, 2, 3, 4, 5], (x) => x > 0)).toEqual(true);
});

it("should return false if any element in an array fails the test", () => {
	expect(every([1, 2, 3, 4, 5], (x) => x > 3)).toEqual(false);
});

it("can use the index", () => {
	expect(every([1, 2, 3, 4, 5], (x, i) => i > x)).toEqual(false);
});
