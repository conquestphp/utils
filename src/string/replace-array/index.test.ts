import { it, expect } from "vitest";
import { replaceArray } from ".";

it("can replace multiple substrings", () => {
	expect(replaceArray("The quick brown fox", ["quick", "brown"], "lazy")).toBe(
		"The lazy lazy fox",
	);
});
