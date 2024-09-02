import { expect, it } from "vitest";
import { multiply } from ".";

it("should multiply the array by the given number", () => {
	expect(multiply([1, 2, 3], 2)).toEqual([1, 2, 3, 1, 2, 3]);
});

it("should return an empty array if the array is empty", () => {
	expect(multiply([], 2)).toEqual([]);
});

it("should return an empty array if the number is 0", () => {
	expect(multiply([1, 2, 3], 0)).toEqual([]);
});

it("should multiply objects", () => {
	expect(
		multiply([{ name: "User #1", email: "user1@example.com" }], 2),
	).toEqual([
		{ name: "User #1", email: "user1@example.com" },
		{ name: "User #1", email: "user1@example.com" },
	]);
});
