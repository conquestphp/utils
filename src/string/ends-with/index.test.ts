import { it, expect } from "vitest";
import { endsWith } from ".";

it("can check if string ends with substring", () => {
	expect(endsWith("Hello World", "World")).toBe(true);
	expect(endsWith("Hello World", ["Earth", "World"])).toBe(true);
});
