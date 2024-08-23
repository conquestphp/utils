import { it, expect } from "vitest";
import { padLeft } from ".";

it("can pad string on left side", () => {
	expect(padLeft("Hello", 7)).toBe("  Hello");
	expect(padLeft("Hi", 4, "0")).toBe("00Hi");
});
