import { it, expect } from "vitest";
import { startsWith } from ".";

it("can check if string starts with substring", () => {
	expect(startsWith("Hello World", "Hello")).toBe(true);
	expect(startsWith("Hello World", ["Hi", "Hello"])).toBe(true);
});
