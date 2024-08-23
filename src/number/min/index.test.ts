import { expect, it } from "vitest";
import { min } from ".";

it("should return the minimum number from a list of numbers", () => {
	expect(min(1, 2, 3, 4, 5)).toBe(1);
	expect(min(5, 4, 3, 2, 1)).toBe(1);
	expect(min(-1, -2, -3, -4, -5)).toBe(-5);
});

it("should work with floating point numbers", () => {
	expect(min(1.1, 1.2, 1.3)).toBe(1.1);
	expect(min(0.1, 0.2, 0.3)).toBe(0.1);
});

it("should return the only element if only one is provided", () => {
	expect(min(42)).toBe(42);
});

it("should work with strings (lexicographic comparison)", () => {
	expect(min("a", "b", "c")).toBe("a");
	expect(min("apple", "banana", "cherry")).toBe("apple");
});

it("should work with custom objects that implement comparison", () => {
	const obj1 = { value: 1, valueOf: () => 1 };
	const obj2 = { value: 2, valueOf: () => 2 };
	const obj3 = { value: 3, valueOf: () => 3 };
	expect(min(obj1, obj2, obj3)).toBe(obj1);
});
