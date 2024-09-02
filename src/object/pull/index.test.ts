import { expect, it } from "vitest";
import { pull } from ".";

it("should remove a key", () => {
	let obj = { a: 1 };
	expect(pull(obj, "a")).toEqual(1);
	expect(obj).toEqual({});
});

it("should return undefined if the key does not exist", () => {
	let obj = { a: 1 };
	expect(pull(obj, "b")).toBeUndefined();
	expect(obj).toEqual({ a: 1 });
});
