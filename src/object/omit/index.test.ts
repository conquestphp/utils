import { expect, it } from "vitest";
import { omit } from ".";

it("should remove specified keys from object", () => {
	const obj = { a: 1, b: 2, c: 3, d: 4 };
	expect(omit(obj, "b", "d")).toEqual({ a: 1, c: 3 });
});

it("should return the same object if no keys are specified", () => {
	const obj = { a: 1, b: 2 };
	expect(omit(obj)).toEqual(obj);
});

it("should handle non-existent keys", () => {
	const obj = { a: 1, b: 2 };
	expect(omit(obj, "c", "d")).toEqual(obj);
});

it("should work with empty objects", () => {
	expect(omit({}, "a", "b")).toEqual({});
});

it("should handle various value types", () => {
	const obj = { a: 1, b: "string", c: true, d: null, e: undefined, f: {} };
	expect(omit(obj, "b", "d", "f")).toEqual({ a: 1, c: true, e: undefined });
});

it("should not modify the original object", () => {
	const obj = { a: 1, b: 2, c: 3 };
	omit(obj, "b");
	expect(obj).toEqual({ a: 1, b: 2, c: 3 });
});
