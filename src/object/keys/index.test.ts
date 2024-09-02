import { expect, it } from "vitest";
import { keys } from "./index";

it("should return the keys of an object", () => {
	expect(keys({ a: 1, b: 2, c: 3 })).toEqual(["a", "b", "c"]);
});

it("should be empty for an empty object", () => {
	expect(keys({})).toEqual([]);
});
