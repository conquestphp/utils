import { expect, it } from "vitest";
import { filter } from ".";

it("should filter an array", () => {
	expect(filter([1, 2, 3, 4, 5], (x) => x % 2 === 0)).toEqual([2, 4]);
});

it("should filter an empty array", () => {
	expect(filter([], (x) => x % 2 === 0)).toEqual([]);
});

it("can use the index", () => {
	expect(filter([1, 2, 3, 4, 5], (x, i) => i % 2 === 0)).toEqual([1, 3, 5]);
});
