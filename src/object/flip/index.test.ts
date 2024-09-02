import { expect, it } from "vitest";
import { flip } from "./index";

it("should flip object keys and values", () => {
	expect(flip({ a: 1, b: 2, c: 3 })).toEqual({ 1: "a", 2: "b", 3: "c" });
});

it("should return an empty object if the input is empty", () => {
	expect(flip({})).toEqual({});
});
