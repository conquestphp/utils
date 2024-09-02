import { expect, it } from "vitest";
import { select } from ".";

it("should select an object", () => {
	expect(select({ a: 1, b: 2, c: 3 }, "a")).toEqual({ a: 1 });
});

it("should select an object with multiple keys", () => {
	expect(select({ a: 1, b: 2, c: 3 }, "a", "b")).toEqual({ a: 1, b: 2 });
});

it("should select an object with a key that does not exist", () => {
	expect(select({ a: 1, b: 2, c: 3 }, "a", "b", "d")).toEqual({ a: 1, b: 2 });
});
