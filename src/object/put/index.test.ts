import { expect, it } from "vitest";
import { put } from ".";

it("should put a value", () => {
	let obj = { a: 1 };
	put(obj, "b", 2);
	expect(obj).toEqual({ a: 1, b: 2 });
});

it("should overwrite a value", () => {
	let obj = { a: 1 };
	put(obj, "a", 2);
	expect(obj).toEqual({ a: 2 });
});
