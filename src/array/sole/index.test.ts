import { expect, it } from "vitest";
import { sole } from ".";

it("should return the only element that matches the predicate", () => {
	expect(sole([1, 2, 3, 4, 5], (n) => n % 5 === 0)).toBe(5);
});

it("should be undefined if no element matches the predicate", () => {
	expect(sole([1, 2, 3, 4, 5], (n) => n % 7 === 0)).toBeUndefined();
});

it("should be undefined if more than one element matches the predicate", () => {
	expect(sole([1, 2, 3, 4, 5], (n) => n % 2 === 0)).toBeUndefined();
});
