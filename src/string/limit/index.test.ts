import { it, expect } from "vitest";
import { limit } from ".";

it("can limit string length", () => {
	expect(limit("Hello World", 5)).toBe("Hello");
	expect(limit("Hi", 5)).toBe("Hi");
});
