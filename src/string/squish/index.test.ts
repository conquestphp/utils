import { it, expect } from "vitest";
import { squish } from ".";

it("can remove extra whitespace", () => {
	expect(squish("  Hello   World  ")).toBe("Hello World");
});
