import { expect, it } from "vitest";
import { maxBy } from "./index";

it("should return the maximum number in an array of numbers", () => {
	expect(maxBy([1, 3, 2, 5, 4])).toBe(5);
});

it("should return the maximum string in an array of strings", () => {
	expect(maxBy(["a", "c", "b", "e", "d"])).toBe("e");
});

it("should work with custom comparison function for objects", () => {
	const objects = [
		{ name: "Alice", age: 30 },
		{ name: "Bob", age: 25 },
		{ name: "Charlie", age: 35 },
	];
	expect(maxBy(objects, (obj) => obj.age)).toEqual({
		name: "Charlie",
		age: 35,
	});
});

it("should return the only element for single-element arrays", () => {
	expect(maxBy([42])).toBe(42);
});

it("should work with negative numbers", () => {
	expect(maxBy([-5, -2, -8, -1])).toBe(-1);
});

it("should handle arrays with duplicate maximum values", () => {
	expect(maxBy([1, 5, 3, 5, 2])).toBe(5);
});

it("should work with custom comparison function for strings which uses order as tie break", () => {
	const strings = ["apple", "banana", "cherry", "date"];
	expect(maxBy(strings, (str) => str.length)).toBe("banana");
});
