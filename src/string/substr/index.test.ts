import { it, expect } from "vitest";
import { substr } from ".";

it("can get substring", () => {
	expect(substr("Hello World", 6)).toBe("World");
	expect(substr("Hello World", 0, 5)).toBe("Hello");
});
