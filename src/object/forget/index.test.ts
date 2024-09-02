import { expect, it } from "vitest";
import { forget } from "./index";

it("should forget key from an object", () => {
	expect(forget({ a: 1, b: 2, c: 3 }, "a")).toEqual({ b: 2, c: 3 });
});

it("should return the same object if the key does not exist", () => {
	expect(forget({ a: 1, b: 2, c: 3 }, "d")).toEqual({ a: 1, b: 2, c: 3 });
});

it("should forget multiple keys from an object", () => {
	expect(forget({ a: 1, b: 2, c: 3 }, "a", "b", "c")).toEqual({});
});
