import { it, expect } from "vitest";
import { pad } from ".";

it("can pad string on both sides", () => {
	expect(pad("Hello", 9)).toBe("  Hello  ");
	expect(pad("Hi", 5, "-")).toBe("-Hi--");
});
