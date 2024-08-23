import { it, expect } from "vitest";
import { dot } from ".";

it("can expand dot notation", () => {
	expect(dot("a.b.c")).toEqual(["a", "b", "c"]);
	expect(dot("a.0.b.c")).toEqual(["a", 0, "b", "c"]);
});
