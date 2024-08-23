import { it, expect } from "vitest";
import { rtrim } from ".";

it("can trim whitespace from right", () => {
	expect(rtrim("  Conquest  ")).toBe("  Conquest");
});
