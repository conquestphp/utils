import { it, expect } from "vitest";
import { title } from ".";

it("can convert string to title case", () => {
	expect(title("hello_world")).toBe("Hello World");
	expect(title("TypeScript")).toBe("TypeScript");
	expect(title("a nice title uses the correct case")).toBe(
		"A Nice Title Uses The Correct Case",
	);
});
