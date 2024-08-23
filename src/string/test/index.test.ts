import { it, expect } from "vitest";
import { test } from ".";

it("can test string against regex pattern", () => {
	expect(test("Hello123", "^[A-Za-z]+\\d+$")).toBe(true);
	expect(test("Hello", "^\\d+$")).toBe(false);
});
