import { it, expect } from "vitest";
import { isJson } from ".";

it("can check if string is valid JSON", () => {
	expect(isJson('{"name": "John"}')).toBe(true);
	expect(isJson("Invalid JSON")).toBe(false);
});
